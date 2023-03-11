import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import xmark from '../../assets/x-solid2.svg';
import searchicon from '../../assets/magglass.svg';
import axios from "axios";
import './style.css'

export default function Database() {
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const onChangeTextInput = (e) => {
        setContent(e.target.value);
    }

    const checkWord = () => {
        if (content.length>0) {
            axios.post('http://localhost:8000/check',{
                word: content.toLowerCase(),
            }).then(res=>{
                if (res.data)
                    alert(`"${content}" сөзі дерекқорда БАР.`);
                else
                    alert(`"${content}" сөзі дерекқорда ЖОҚ.`);
            }).catch(err=>{
                console.log(err);
            });
        }
        setContent("");
    }

    const sendWord = () => {
        if (content.length>1) {
            axios.post('http://localhost:8000/useraddword',{
                word: content.toLowerCase(),
            }).then(res=>{
                if (res.data)
                    alert(`"${content}" дерекқорға қосылды. Рақмет!`);
                else alert(`"${content}" сөзі дерекқорда бар.`);
            }).catch(err=>{
                console.log(err);
            });
        }
        setContent("");
    }

    const clearWord = () => {
        if (content.length>0) {
            axios.post('http://localhost:8000/userdeleteword',{
                word: content.toLowerCase(),
            }).then(res=>{
                if (res.data)
                    alert(`"${content}" дерекқордан жойылды.`);
                else alert(`"${content}" сөзі дерекқорда табылмады.`);
            }).catch(err=>{
                console.log(err);
            });
        }
        setContent("");
    }
    
    return(
        <div>
            <div className="soztap">    
                <p onClick={()=>navigate("/")}> ДЕРЕКҚОР </p>
            </div>
            <div className="subheader">
                <div className="empty"></div>
                <input onChange={onChangeTextInput} value={content} placeholder=""/>
                <button className="searchadd" onClick={checkWord}> <img src={searchicon} alt="" /> </button>
                <button className="searchadd" onClick={sendWord}> + </button>
                <button className="clear" onClick={clearWord}> <img src={xmark} alt="" /> </button>
                <div className="empty"></div>
            </div>
            <div className='bigbox'>
                
            </div>
        </div>
    )
}