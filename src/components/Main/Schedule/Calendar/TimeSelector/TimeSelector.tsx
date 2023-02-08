import React from 'react';
import s from "./TimeSelector.module.scss"


const TimeSelector = () => {
    let selectedPeriod = {
        startDay: 5,
        endDay: 11,
        month: "сентября",
    }



    return (
        <div className={s.timeSelector}>
            <button className={s.leftButton}/>
            <span className={s.period}>
                {`${selectedPeriod.startDay} - ${selectedPeriod.endDay} ${selectedPeriod.month}`}</span>
            <button className={s.rightButton}/>
        </div>
    );
};

export default TimeSelector;