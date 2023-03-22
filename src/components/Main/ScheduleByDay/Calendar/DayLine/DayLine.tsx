import React from 'react';
import s from "./DayLine.module.scss"


const DayLine = () => {
    let week = [
        {dayNumber: 5, dayName: "Пн"},
    ]

    return (
        <div className={s.dayLine}>
            <div className={s.weekPerDay}>
                {week.map(d => <div className={s.oneDay} key={d.dayNumber}>{`${d.dayNumber}, ${d.dayName}`}</div>)}
            </div>
            <span className={s.underLine}/>
        </div>
    );
};

export default DayLine;