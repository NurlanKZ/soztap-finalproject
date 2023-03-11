import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import checkmark from '../../assets/check-solid.svg';
import xmark from '../../assets/x-solid.svg';
import homeicon from '../../assets/house-solid.svg';
import axios from "axios";
import './style.css'

export default function Field({nextChar, setNextChar, setResetUsedLetters, foundWords, points, setWordAccepted, content, setContent}) {
    const navigate = useNavigate();

    useEffect(()=>{
        setContent(content+nextChar);
        setNextChar("");
    },[nextChar])

    const sendWord = () => {
        if (foundWords.indexOf(content)<0) {
            axios.post('http://localhost:8000/check',{
                word: content.toLowerCase(),
            }).then(res=>{
                if (res.data)
                    setWordAccepted(content);
                else
                    setResetUsedLetters(true);
            }).catch(err=>{
                console.log(err);
            });
        } else {
            setResetUsedLetters(true);
        }
        setContent("");
    }

    const clearWord = () => {
        setContent("");
        setResetUsedLetters(true);
    }

    return(
        <div className="header">
            <button className="clear" onClick={()=>navigate("/")}> <img src={homeicon} alt="home" /> </button>
            <div className="empty"></div>
            <button className="confirm">{points}</button>
            <input defaultValue={content} placeholder=""/>
            <button className="confirm" onClick={sendWord}> <img src={checkmark} alt="" /> </button>
            <button className="clear" onClick={clearWord}> <img src={xmark} alt="" /> </button>
            <div className="empty"></div>
        </div>
        
    )
}