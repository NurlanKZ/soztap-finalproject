import './style.css'
import { useNavigate } from 'react-router-dom'

export default function Menu() {
    const navigate = useNavigate();

    return(
        <div>
            <div className="soztap">    
                <p> СӨЗТАП! </p>
            </div>
            <div className='menublock'>
                <button onClick={()=>{navigate("/game")}}>
                    <p> О </p>
                </button>
                <button onClick={()=>{navigate("/game")}}>
                    <p> Й </p>
                </button>
                <button onClick={()=>{navigate("/game")}}>
                    <p> Н </p>
                </button>
                <button onClick={()=>{navigate("/game")}}>
                    <p> А </p>
                </button>
                <button onClick={()=>{navigate("/game")}}>
                    <p> У </p>
                </button>
            </div>
            <div className='menublock'>
                <button onClick={()=>{navigate("/database")}}>
                    <p> С </p>
                </button>
                <button onClick={()=>{navigate("/database")}}>
                    <p> Ө </p>
                </button>
                <button onClick={()=>{navigate("/database")}}>
                    <p> З </p>
                </button>
                <button onClick={()=>{navigate("/database")}}>
                    <p> + </p>
                </button>
                <button onClick={()=>{navigate("/database")}}>
                    <p> + </p>
                </button>
            </div>
            <div className='menublock'>
                <button onClick={()=>{navigate("/rewards")}}>
                    <p> Б </p>
                </button>
                <button onClick={()=>{navigate("/rewards")}}>
                    <p> І </p>
                </button>
                <button onClick={()=>{navigate("/rewards")}}>
                    <p> Л </p>
                </button>
                <button onClick={()=>{navigate("/rewards")}}>
                    <p> І </p>
                </button>
                <button onClick={()=>{navigate("/rewards")}}>
                    <p> М </p>
                </button>
            </div>
            <div className='menublock'>
                <button onClick={()=>{navigate("/about")}}>
                    <p> А </p>
                </button>
                <button onClick={()=>{navigate("/about")}}>
                    <p> В </p>
                </button>
                <button onClick={()=>{navigate("/about")}}>
                    <p> Т </p>
                </button>
                <button onClick={()=>{navigate("/about")}}>
                    <p> О </p>
                </button>
                <button onClick={()=>{navigate("/about")}}>
                    <p> Р </p>
                </button>
            </div>
        </div>
    )
}