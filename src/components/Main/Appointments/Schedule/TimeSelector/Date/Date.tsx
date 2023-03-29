import React, { useState , useEffect } from "react";
import s from "./Date.module.scss"


const DateTime = () => {

    let [date,setDate] = useState(new Date());
    
    useEffect(() => {
        let timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
    
    let days = [
        "Вс", 
        "Пн", 
        "Вт", 
        "Ср", 
        "Чт", 
        "Пт", 
        "Сб"
    ];
    let month = [
        "января", 
        "февраля", 
        "марта", 
        "апреля", 
        "мая", 
        "июня", 
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря"
    ];

    return(
        <div className={s.time}> 
            <span> {days[date.getDay()]}</span>
            <span> {date.getDate()} </span>
            <span> {month[date.getMonth()]}</span>
            <span>  {date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        </div>
    )
}

export default DateTime
