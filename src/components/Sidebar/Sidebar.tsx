import React from "react";
import s from "./Sidebar.module.scss"

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <nav>
                <ul className={s.menuList}>
                    <li className={s.menuItem}>
                        <div className={s.book}></div>
                    </li>
                    <li className={s.menuItem}>
                        <div className={s.calendar}></div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;