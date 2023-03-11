// import { useState, useEffect } from 'react';
// import axios from "axios";
// import Field from '../../field/index.jsx'
// import alphabet from '../../../assets/alphabet.json';
// import './style.css'

// export default function Game3() {
//     const [nextChar, setNextChar] = useState('');
//     const [currLetters, setCurrLetter] = useState([]);
//     const [usedIDs, setUsedIDs] = useState([]);
//     const [resetUsedLetters, setResetUsedLetters] = useState(false);
//     const [topWords,setTopWords] = useState([]);
//     const letters = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
//     const [timeIsUp, setTimeIsUp] = useState(false);

//     const getRandomLetter=()=>{
//         const newLetter = alphabet[Math.ceil(Math.random()*alphabet.length)-1].toUpperCase();
//         return newLetter;
//     };

//     useEffect(()=>{
//         setUsedIDs([]);
//         setResetUsedLetters(false);
//     },[resetUsedLetters]);
    
//     useEffect(()=>{
//         setCurrLetter(
//             letters.map(()=>getRandomLetter())
//         );
//     },[]);

//     const handleLetterClick=(id)=>{
//         if (usedIDs.indexOf(id)<0) {
//             setNextChar(currLetters[id]);
//             setUsedIDs([...usedIDs,id]);
//         }
//     };

//     useEffect(()=>{
//         if (currLetters.length===20) {
//             axios.post('http://localhost:8000/possible',{
//                 magazine: currLetters.join('').toLowerCase(),
//             }).then(res=>{
//                 setTopWords(res.data);
//             }).catch(err=>{
//                 console.log(err);
//             });
//         }
//     },[currLetters]);

//     useEffect(() => {
//         setTimeout(() => {
//             setTimeIsUp(true);
//         }, 120000);
//       }, []);

//     return(
//         <div>
//             <div>
//                 <Field nextChar={nextChar} setNextChar={setNextChar} setResetUsedLetters={setResetUsedLetters}/>
//             </div>
//             <div>
//                 <div className='letterGrid'>
//                     {letters.map((el)=>(
//                         <button
//                             key={el}
//                             onClick={()=>handleLetterClick(el)}
//                         >
//                             {currLetters[el]}
//                         </button>
//                     ))}
//                 </div>
//                 <div className='rightWindow'>
//                     {timeIsUp?
//                     <>
//                     {topWords.map((el)=>(
//                         <p>{el}</p>
//                     ))}
//                     </>:<>
//                     {topWords.map((el)=>(
//                         <p>{el.substring(0,(el.length+1)/2)}</p>
//                     ))}
//                     </>
//                     }
//                 </div>
//             </div>
            
            
//         </div>
//     )
// }