import React from 'react';
import s from "./ViewSelector.module.scss"
import {Link} from "react-router-dom";

const ViewSelector = () => {

    let buttons = [
        {id: "day", isSelected: true, buttonName: "День", link: "/logined/registrationday"},
        {id: "week", isSelected: false, buttonName: "Неделя", link: "/logined/registrationweek"},
        {id: "month", isSelected: false, buttonName: "Месяц", link: "/"},
    ]

    return (
        <div className={s.viewSelectorWrapper}>
            <span className={s.label}>Вид</span>
            <div className={s.buttons}>
                {
                    buttons.map(b =>
                        <Link key={b.id} to={b.link} className={s.link}>
                            <button key={b.id} className={s.button + ' ' + (b.isSelected ? s.buttonSelected : '')}>
                                {b.buttonName}
                            </button>
                        </Link>)
                }
            </div>
        </div>
    );

};

export default ViewSelector;