import React, {useEffect} from 'react';
import s from "./Table.module.scss"
import {useAppDispatch, useAppSelector} from "../../../../../hooks/redux";
import {fetchUsers} from "../../../../../store/reducers/ActioanCreators";

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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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

    let oneWeek = schedule.map((t) =>
        t.visits[0].clientFullName).map((t) =>
        <div className={s.day} key={Math.random()}>
            <div className={s.upperBox}>{t}</div>
            <div className={s.underBox}/>
        </div>
    );

    const dispatch = useAppDispatch();
    const {users, isLoading, error} = useAppSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(fetchUsers())
    }, []);


    return (
        <div className={s.table}>
            <div className={s.oneRow}>
                <div className={s.rowTime}/>
                <div className={s.rowWeek}>
                    {isLoading && <h3>Идёт загрузка ...</h3>}
                    {error && <h3>{error}</h3>}
                    {JSON.stringify(users, null, 1)}
                </div>
            </div>

        </div>
    );
};

export default Table;