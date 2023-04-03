import React from 'react';
import s from './Select.module.scss'

const Select = () => {
    return (
        <div>
            <div className={s.formGroup}>
                <div className={s.selectWrapper}>
                    <select name={"name"} className={s.select}>
                        <option value={"1"}>Календарь</option>
                        <option value={"2"}>Календарь2</option>
                        <option value={"3"}>Календарь3</option>
                        <option value={"4"}>Календарь4</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Select;