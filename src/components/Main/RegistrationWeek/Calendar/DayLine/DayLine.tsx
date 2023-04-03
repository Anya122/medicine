import React from 'react';
import s from "./DayLine.module.scss"
import {useAppSelector} from "../../../../../hooks/redux";
import moment from "moment";


const DayLine = () => {
    const {selectedWeek} = useAppSelector(state => state.timeReducer);

    class OneDay {
        dayNumber: string;
        dayName: string;
        constructor(weekDay: number) {
            this.dayNumber = moment(selectedWeek.toString(), 'w').weekday(weekDay).format('D');
            this.dayName = moment(selectedWeek.toString(), 'w').weekday(weekDay).format('dd');
        }
    }

    const week = new Array(7).fill(0).map((t, i) => new OneDay(i));

    return (
        <div className={s.dayLine}>
            <div className={s.weekPerDay}>
                {week.map(d => <div className={s.oneDay} key={d.dayNumber}>
                    {`${d.dayNumber}, ${d.dayName[0].toUpperCase()}${d.dayName[1]}`}</div>)}
            </div>
            <span className={s.underLine}/>
        </div>
    );
};

export default DayLine;