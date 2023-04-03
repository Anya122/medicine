import React from "react";
import s from "./RegistrationDay.module.scss"
import Calendar from "./Calendar/Calendar";
import Properties from "./Properties/Properties";

const RegistrationDay = () => {
    return (
        <div className={s.schedule}>
            <Properties />
            <Calendar />

        </div>
    );
};

export default RegistrationDay;