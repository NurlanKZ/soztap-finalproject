import './style.css'
import { useNavigate } from 'react-router-dom'

export default function Games() {
    const navigate = useNavigate();

    return(
        <div className='twobytwo'>
            <div className='box' onClick={()=>{navigate("/game/1")}}>
                <p>ТЕЗТАП</p>
            </div>
            <div className='box' onClick={()=>{navigate("/game/2")}}>
                <p>БІРТАП</p>
            </div>
        </div>
    )
}