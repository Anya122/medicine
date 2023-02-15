import React from 'react';
import s from "./Table.module.scss"


const Table = () => {

    let schedule = [
        {
            day: 1,
            visits: [
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
            ]
        },
        {
            day: 2,
            visits: [
                {time: 'time', clientFullName: 'Соколов Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
            ]
        }, {
            day: 3,
            visits: [
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
            ]
        }, {
            day: 4,
            visits: [
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
            ]
        }, {
            day: 5,
            visits: [
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
            ]
        }, {
            day: 6,
            visits: [
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
            ]
        }, {
            day: 7,
            visits: [
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
                {time: 'time', clientFullName: 'Петров Василий Васильевич'},
            ]
        },
    ];


    let oneTime2 =
        schedule.map((t) => {
            return t.visits[0].clientFullName
        }).map((t) =>
            <div className={s.day}>
                <div className={s.upperBox}>{t}</div>
                <div className={s.underBox}/>
            </div>
        )


    return (
        <div className={s.table}>
            <div className={s.oneRow}>
                <div className={s.rowTime}/>
                <div className={s.rowWeek}>
                    {
                        oneTime2
                    }
                </div>
            </div>

        </div>
    );
};

export default Table;