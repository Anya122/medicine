import React from "react";
import s from "./TimeSelector.module.scss";
import Date from "./Date/Date";

const TimeSelector = () => {
    return (
        <div className={s.timeSelector}>
            <div className={s.leftButton}></div>

            <div className={s.todays}>
                <div className={s.today}>Сегодня</div>
                <Date/>
            </div>
            

            <div className={s.rightButton}></div>
        </div>

    );
};

export default TimeSelector;

