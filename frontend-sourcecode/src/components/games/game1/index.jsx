import { useState, useEffect } from 'react';
import axios from "axios";
import Field from '../../field/index.jsx'
import alphabet from '../../../assets/alphabet.json';
import './style.css'

const getRandomLetter=()=>{
    const newLetter = alphabet[Math.ceil(Math.random()*alphabet.length)-1].toUpperCase();
    return newLetter;
};

const format=(t)=>{
    const min = Math.floor(t/60);
    const sec = t%60;

    return `${min}:${sec<10 ? `0${sec}` : `${sec}`}`;
};

export default function Game1() {
    const [content, setContent] = useState("");
    const [nextChar, setNextChar] = useState('');
    const [currLetters, setCurrLetter] = useState([]);
    const [usedIDs, setUsedIDs] = useState([]);
    const [resetUsedLetters, setResetUsedLetters] = useState(false);
    const [foundWords, setFoundWords] = useState([]);
    const [wordAccepted, setWordAccepted] = useState(0);
    const [points, setPoints] = useState(0);
    const [topWords,setTopWords] = useState([]);
    const letters = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
    const [timeLeft, setTimeLeft] = useState(180);

    const handleLetterClick=(id)=>{
        if (usedIDs.indexOf(id)<0) {
            setNextChar(currLetters[id]);
            setUsedIDs([...usedIDs,id]);
        }
    };

    useEffect(()=>{
        setUsedIDs([]);
        setResetUsedLetters(false);
    },[resetUsedLetters]);
    
    useEffect(()=>{
        setCurrLetter(
            letters.map(()=>getRandomLetter())
        );
    },[]);

    useEffect(()=>{
        if (wordAccepted&&timeLeft>0) {
            setPoints(points+wordAccepted.length);
            setFoundWords([wordAccepted,...foundWords]);
        }
        setUsedIDs([]);
        setWordAccepted("");
    },[wordAccepted]);

    useEffect(() => {
        if (timeLeft>0) {
            setTimeout(() => {
                setTimeLeft(timeLeft-1);
            }, 1000);
        } else if (points>0) {
            localStorage.setItem('balance', Number(localStorage.getItem('balance'))+points);
            setPoints(0);
        };
    }, [timeLeft]);

    useEffect(()=>{
    if (currLetters.length===20) {
        axios.post('http://localhost:8000/possible',{
            magazine: currLetters.join('').toLowerCase(),
        }).then(res=>{
            setTopWords(res.data);
        }).catch(err=>{
            console.log(err);
        });
    }
    },[currLetters]);

    return(
        <>
            <div>
                <Field content={content} setContent={setContent}
                nextChar={nextChar} setNextChar={setNextChar}
                setResetUsedLetters={setResetUsedLetters} foundWords={foundWords}
                points={points} setWordAccepted={setWordAccepted}
                />
            </div>
            <div className='letterGrid'>
                {letters.map((el)=>(
                    <button
                        key={el}
                        onClick={()=>handleLetterClick(el)}
                    >
                        {currLetters[el]}
                    </button>
                ))}
            </div>
            <div className='found-wrapper'>
                {foundWords.slice(0,15).map((el)=>(
                    <p key={el}>{el}</p>
                ))}
            </div>
            <div>
                {timeLeft>0?
                    <>
                        <div className='timer-wrapper'>
                            <p>{format(timeLeft)}</p>
                        </div>
                    </>:
                    <>
                        <div className='gameover-wrapper'>
                            <p>ЖАРАЙСЫҢ!</p>
                            <p>Үздік жауаптар:</p>
                            {topWords.map((el)=>(
                                <p key={el}>{el.toUpperCase()}</p>
                            ))}
                        </div>
                    </>
                }
            </div>
        </>
    )
}