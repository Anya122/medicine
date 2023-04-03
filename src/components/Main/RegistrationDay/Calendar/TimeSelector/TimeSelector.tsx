import React from 'react';
import s from "./TimeSelector.module.scss"


const TimeSelector = () => {
    const selectedPeriod = {
        day: 5,
        month: "сентября",
    }



    return (
        <div className={s.timeSelector}>
            <button className={s.leftButton}/>
            <span className={s.period}>
                {`${selectedPeriod.day} ${selectedPeriod.month}`}</span>
            <button className={s.rightButton}/>
        </div>
    );
};

export default TimeSelector;