import React from 'react';
import s from "./SpecialistFinder.module.scss"

const SpecialistFinder = (props:any) => {
    return (
        <div>
            <div className={s.wrapperInput}>
                <input className={s.input} placeholder={props.placeholder}/>
                <span className={s.searchIcon}/>
            </div>


        </div>
    );
};

export default SpecialistFinder;