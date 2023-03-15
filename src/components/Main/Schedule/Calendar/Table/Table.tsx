import React, {useEffect} from 'react';
import s from "./Table.module.scss"
import {useAppSelector} from "../../../../../hooks/redux";

const Table = () => {
    const visits = useAppSelector(state => state.visitsReducer);

    useEffect(() => {
        console.log(visits);
    }, []);

    const timeMarkers = [
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
    ]
    const vLines = Array(6).fill(0).map((t, i) => i + 1);

    return (
        <div className={s.table}>

            <div className={s.grid}>
                {timeMarkers.map(t =>
                    <div key={t} className={s.hBlock}>
                        <div className={s.timeStamp}>{t}</div>
                        <span className={s.hTimeLine}></span>
                    </div>)}
            </div>

            <div className={s.vLines}>
                {vLines.map(t => <span key={t} className={s.vBlock}></span>)}
            </div>


        </div>
    );
};

export default Table;

