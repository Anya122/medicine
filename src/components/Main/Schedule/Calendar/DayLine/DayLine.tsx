import React from 'react';
import s from "./DayLine.module.scss"


const DayLine = () => {
    let week = [
        {dayNumber: 5, dayName: "Пн"},
        {dayNumber: 6, dayName: "Вт"},
        {dayNumber: 7, dayName: "Ср"},
        {dayNumber: 8, dayName: "Чт"},
        {dayNumber: 9, dayName: "Пт"},
        {dayNumber: 10, dayName: "Сб"},
        {dayNumber: 11, dayName: "Вс"},
    ]

    return (
        <div className={s.dayLine}>
            <div className={s.weekPerDay}>
                {week.map(d => <div className={s.oneDay}>{`${d.dayNumber}, ${d.dayName}`}</div>)}
            </div>
            <span className={s.underLine}/>
        </div>
    );
};

export default DayLine;