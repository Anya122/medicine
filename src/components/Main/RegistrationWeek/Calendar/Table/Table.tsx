import React, {useEffect, useState} from 'react';
import s from "./Table.module.scss"
import {useAppDispatch, useAppSelector} from "../../../../../hooks/redux";
import TableContent from "./TableContent/TableContent";
import {fetchVisit} from "../../../../../store/reducers/ActioanCreators";


export const timeMarkers = [
    "8.00",
    "9.00",
    "10.00",
    "11.00",
    "12.00",
    "13.00",
    "14.00",
    "15.00",
    "16.00",
    "17.00",
    "18.00",
    "19.00",
    "20.00",
    "21.00",
    "22.00",
    "23.00",
    "24.00",
];

type Props = {
    info: string
}


const Table = ({info}:Props) => {
    const vLines = Array(6).fill(0).map((t, i) => i + 1);

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

    //Условие приближения линии времени к горизонтальным линиям
    const horizontalBlock =
        timeMarkers.map(t =>
            <div key={t} className={s.hBlock}>
                {

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
            setVerticalShift((((hour * 60 + min - 8 * 60) * 729) / (9 * 60)).toString() + 'px');
        }, 10000);

        return () => clearInterval(interval);
    }, [verticalShift]);

    const visit = useAppSelector(state => state.visitsReducer.visit);
    const dispatch = useAppDispatch();
    const getVisits = () => {
        dispatch(fetchVisit());
    }


    return (
        <div className={s.table}>

            <div className={s.grid}>
                {horizontalBlock}
            </div>

            <div className={s.vLines}>
                {vLines.map(t => <span key={t} className={s.vBlock}/>)}
            </div>

            <div className={s.realTimeLine} style={{marginTop: verticalShift}}>
                <div className={s.realTime}>{`${h}.${m}`}</div>
                <span className={s.rtlCircle}/>
                <span className={s.rtLine}/>
            </div>

            <div className={s.usersArea}>
                <button className={s.butGetUsers} onClick={()=>getVisits()}>Получить записи</button>
                <div className={s.usersData}>
                    {visit.length > 0 && JSON.stringify(visit, null, 5)}
                </div>
            </div>


            <TableContent />





        </div>
    );
};

export default Table;

