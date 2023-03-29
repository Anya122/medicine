import React from 'react';
import s from "./DayLine.module.scss"


const DayLine = () => {
    let names = [
        {Name: "Время"},
        {Name: "Имя"},
        {Name: "Кабинет"},
        {Name: "Обращение"},
        
    ]

    return (
        <div className={s.dayLine}>
            <div className={s.weekPerDay}>
                {names.map(d => <div className={s.oneDay} key={d.Name}>{`${d.Name}`}</div>)}
            </div>
            <span className={s.underLine}/>
        </div>
    );
};

export default DayLine;