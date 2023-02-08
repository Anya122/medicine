import React from 'react';
import s from "./ViewSelector.module.scss"

const ViewSelector = () => {

    let buttons = [
        {id: "day", isSelected: false, buttonName: "День"},
        {id: "week", isSelected: true, buttonName: "Неделя"},
        {id: "month", isSelected: false, buttonName: "Месяц"},
    ]

    return (
        <div className={s.viewSelectorWrapper}>
            <span className={s.label}>Вид</span>
            <div className={s.buttons}>
                {
                    buttons.map(b =>
                        <button key={b.id} className={s.button+' '+(b.isSelected ? s.buttonSelected : '')}>
                            {b.buttonName}
                        </button>)
                }
            </div>
        </div>
    );

};

export default ViewSelector;