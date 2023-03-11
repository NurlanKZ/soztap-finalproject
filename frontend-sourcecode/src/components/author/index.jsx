import { useNavigate } from 'react-router-dom'
import portrait from '../../assets/photo2.jpg'
import './style.css'

export default function Author() {
    const navigate = useNavigate();
    
    return(
        <div>
            <div className='about-wrapper'>
                <div className='photo'>
                    <img onClick={()=>navigate("/")} src={portrait} alt="" height={400}/>
                </div>
                <div className='poem'>
                    <p>Дүниеде қонақпыз әрбір жеті,</p>
                    <p>Ашылар өмірдің де соңғы беті.</p>
                    <p>Әлемнің ғажабына куә болдық,</p>
                    <p>Жылаудың, айтшы, онда, бар ма реті?</p>
                    <p className='byline'>- Нұрлан Құдайберген</p>
                </div>
            </div>
            
        </div>
    )
}