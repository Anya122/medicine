import React from "react";
import s from "./Calendar.module.scss"
import TimeSelector from "./TimeSelector/TimeSelector";
import DayLine from "./DayLine/DayLine";
import Table from "./Table/Table";

const Calendar = () => {
    return (
        <div className={s.calendar}>

            <TimeSelector />

            <DayLine />

            <Table info={'руддщ'} />

        </div>
    );
};

export default Calendar;