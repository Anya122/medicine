import React from 'react';
import s from "./SpecialistFinder.module.scss"

const SpecialistFinder = () => {
    return (
        <div>
            <div className={s.wrapperInput}>
                <input className={s.input} placeholder={"Поиск врача"}/>
                <span className={s.searchIcon}/>
            </div>


        </div>
    );
};

export default SpecialistFinder;