import React from "react";
import s from "./ScheduleByDay.module.scss"
import Calendar from "./Calendar/Calendar";
import Properties from "./Properties/Properties";

const ScheduleByDay = () => {
    return (
        <div className={s.schedule}>
            <Properties />
            <Calendar />

        </div>
    );
};

export default ScheduleByDay;