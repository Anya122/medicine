import React from "react";
import s from "./Sidebar.module.scss"
import {useNavigate} from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();


    return (
        <div className={s.sidebar}>
            <nav>
                <ul className={s.menuList}>
                    <li className={s.menuItem} onClick={()=>{navigate("/logined/appoinments")}} >
                        <div className={s.book}> </div>
                    </li>
                    <li className={s.menuItem} onClick={()=>{navigate("/logined/schedule")}}>
                        <div className={s.calendar}></div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;