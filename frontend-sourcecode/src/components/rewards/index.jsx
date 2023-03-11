import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Rewards() {
    const navigate = useNavigate();

    useEffect(()=>{
        if (audio[0].paused) {
            audio[0].play();
        }
    },[]);

    const audio=[
        new Audio('http://127.0.0.1:8000/audio/naqyl_soz.mp3'),
        new Audio('http://127.0.0.1:8000/audio/qorqyt_ata.mp3'),
        new Audio('http://127.0.0.1:8000/audio/al-farabi.mp3'),
        new Audio('http://127.0.0.1:8000/audio/balasagun.mp3'),
        new Audio('http://127.0.0.1:8000/audio/qashqari.mp3'),
        new Audio('http://127.0.0.1:8000/audio/yassawi.mp3'),
        new Audio('http://127.0.0.1:8000/audio/qutyp.mp3'),
        new Audio('http://127.0.0.1:8000/audio/jugineki.mp3'),
        new Audio('http://127.0.0.1:8000/audio/saraii.mp3'),
        new Audio('http://127.0.0.1:8000/audio/zhirenshe.mp3'),
        new Audio('http://127.0.0.1:8000/audio/asan_qaighy.mp3'),
        new Audio('http://127.0.0.1:8000/audio/aiteke_bi.mp3'),
        new Audio('http://127.0.0.1:8000/audio/tole_bi.mp3'),
        new Audio('http://127.0.0.1:8000/audio/buqar_zhyrau.mp3'),
        new Audio('http://127.0.0.1:8000/audio/aqtamberdy.mp3'),
        new Audio('http://127.0.0.1:8000/audio/umbetei.mp3'),
        new Audio('http://127.0.0.1:8000/audio/syrym_datuly.mp3'),
        new Audio('http://127.0.0.1:8000/audio/shal_qulekeuly.mp3'),
        new Audio('http://127.0.0.1:8000/audio/zhanaq.mp3'),
        new Audio('http://127.0.0.1:8000/audio/dulat_babatayuly.mp3'),
        new Audio('http://127.0.0.1:8000/audio/aqan_seri.mp3'),
    ];

    const handlePlay = (index) => {
        if (audio[index].paused) {
            for (let i=1; i<audio.length; i++) {
                audio[i].pause();
            }
            const totalPoints = localStorage.getItem('balance');
            if (totalPoints>=index*100) {
                audio[index].play();
            } else alert(`Қоржыныңызда ${index*100} әріп болуы керек.`)
            
        } else audio[index].pause();
    }
    
    return(
        <div>
            <div className="soztap">
                <p onClick={()=>navigate("/")}> Қоржында {localStorage.getItem('balance') ? localStorage.getItem('balance') : 0} әріп </p>
            </div>
            <div>
                <button onClick={()=>{handlePlay(1)}}>
                    <p> 1 </p>
                </button>
                <button onClick={()=>{handlePlay(2)}}>
                    <p> 2 </p>
                </button>
                <button onClick={()=>{handlePlay(3)}}>
                    <p> 3 </p>
                </button>
                <button onClick={()=>{handlePlay(4)}}>
                    <p> 4 </p>
                </button>
                <button onClick={()=>{handlePlay(5)}}>
                    <p> 5 </p>
                </button>
                <div>
                <button onClick={()=>{handlePlay(6)}}>
                    <p> 6 </p>
                </button>
                <button onClick={()=>{handlePlay(7)}}>
                    <p> 7 </p>
                </button>
                <button onClick={()=>{handlePlay(8)}}>
                    <p> 8 </p>
                </button>
                <button onClick={()=>{handlePlay(9)}}>
                    <p> 9 </p>
                </button>
                <button onClick={()=>{handlePlay(10)}}>
                    <p> 10 </p>
                </button>
            </div>
            <div>
                <button onClick={()=>{handlePlay(11)}}>
                    <p> 11 </p>
                </button>
                <button onClick={()=>{handlePlay(12)}}>
                    <p> 12 </p>
                </button>
                <button onClick={()=>{handlePlay(13)}}>
                    <p> 13 </p>
                </button>
                <button onClick={()=>{handlePlay(14)}}>
                    <p> 14 </p>
                </button>
                <button onClick={()=>{handlePlay(15)}}>
                    <p> 15 </p>
                </button>
            </div>
            <div>
                <button onClick={()=>{handlePlay(16)}}>
                    <p> 16 </p>
                </button>
                <button onClick={()=>{handlePlay(17)}}>
                    <p> 17 </p>
                </button>
                <button onClick={()=>{handlePlay(18)}}>
                    <p> 18 </p>
                </button>
                <button onClick={()=>{handlePlay(19)}}>
                    <p> 19 </p>
                </button>
                <button onClick={()=>{handlePlay(20)}}>
                    <p> 20 </p>
                </button>
            </div>
            </div>
        </div>
    )
}