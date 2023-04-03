import React, {PropsWithChildren} from "react";
import s from "./RegistrationWeek.module.scss"
import Calendar from "./Calendar/Calendar";
import Properties from "./Properties/Properties";

const RegistrationWeek = () => {

    return (
        <div className={s.schedule}>
            <Properties />
            <Calendar />
        </div>
    );
};

export default RegistrationWeek;