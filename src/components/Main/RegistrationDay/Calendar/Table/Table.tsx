import React, {useEffect, useState} from 'react';
import s from "./Table.module.scss"
import {useAppSelector} from "../../../../../hooks/redux";
import {timeMarkers} from "../../../RegistrationWeek/Calendar/Table/Table";


const Table = () => {
    // Смещение на 1 час - 81px
    const [h, setH] = useState(() => {
        const clock = new Date();
        return clock.getHours();
    });
    const [m, setM] = useState(() => {
        const clock = new Date();
        return clock.getMinutes();
    });
    const [verticalShift, setVerticalShift] = useState(() => {
        const res = ((h * 60 + m - 8 * 60) * 729) / (9 * 60);
        return `${res.toString()}px`;
    });

    const horizontalBlock =
        timeMarkers.map(t =>
            <div key={t} className={s.hBlock}>
                {
                    //Условие приближения линии времени к горизонтальным линиям
                    ((+t === h)&&(m < 10))||((+t-1 === h)&&(m > 50))
                        ?<div className={s.timeStamp} style={{color: "transparent"}}>{t}</div>
                        :<div className={s.timeStamp}>{t}</div>
                }
                <span className={s.hTimeLine}/>
            </div>);

    useEffect(() => {
        const interval = setInterval(() => {
            const clock = new Date();
            const min = clock.getMinutes();
            const hour = clock.getHours();
            setH(clock.getHours());
            setM(clock.getMinutes());
            setVerticalShift((((hour * 60 + min - 8 * 60) * 729) / (9 * 60)).toString()+'px');
        }, 10000);
        return () => clearInterval(interval);
    }, [verticalShift]);


    return (
        <div className={s.table}>

            <div className={s.grid}>
                {horizontalBlock}
            </div>

            <div className={s.realTimeLine} style={{marginTop: verticalShift}}>
                <div className={s.realTime}>{`${h}.${m}`}</div>
                <span className={s.rtlCircle}/>
                <span className={s.rtLine}/>
            </div>


        </div>
    );
};

export default Table;

