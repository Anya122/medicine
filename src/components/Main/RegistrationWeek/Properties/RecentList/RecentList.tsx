import React from 'react';
import s from "./RecentList.module.scss"


const RecentList = () => {
    let specialists = [
        {id: 1, specialistName: "Константин Константинов"},
        {id: 2, specialistName: "Вася Пупкин"},
        {id: 3, specialistName: "Константин Константинов"},
        {id: 4, specialistName: "Константин Константинов"},
        {id: 5, specialistName: "Константин Константинов"},
        {id: 6, specialistName: "Константин Константинов"},
    ]

    return (
        <div>
            <div className={s.wrapper}>
                <span className={s.title}>
                    Последние
                </span>
                <ul className={s.ulWrapper}>
                    {specialists.map(spec=><li key={spec.id} className={s.specialist}>{spec.specialistName}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default RecentList;