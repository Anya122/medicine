import React, {PropsWithChildren} from "react";
import s from "./Schedule.module.scss"
import Calendar from "./Calendar/Calendar";
import Properties from "./Properties/Properties";

const Schedule = () => {

    return (
        <div className={s.schedule}>
            <Properties />
            <Calendar />
        </div>
    );
};

export default Schedule;