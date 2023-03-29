import React from "react";
import s from "./Schedule.module.scss";
import DayLine from "./DayLine/DayLine";
import Table from "./Table/Table";
import TimeSelector from "./TimeSelector/TimeSelector";

const Schedule = () => {
    return (
        <div className={s.heee}>

        <TimeSelector/>

        <DayLine/>

        <Table/>

        </div>
    );
};

export default Schedule;

