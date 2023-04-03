import React from "react";
import s from "./Sidebar.module.scss"
import {useNavigate} from "react-router-dom";


const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <div className={s.sidebar}>
            <nav>
                <ul className={s.menuList}>

                    {   window.location.pathname.includes('/logined/appoinments')?
                            <li className={s.menuItem} onClick={() => {
                                navigate("/logined/appoinments")
                            }}
                                style={{backgroundColor: 'rgb(236, 236, 236)'}}
                            >
                                <div className={s.book}></div>
                            </li>
                            :
                            <li className={s.menuItem} onClick={() => {
                                navigate("/logined/appoinments")
                            }}
                            >
                                <div className={s.book}></div>
                            </li>
                    }
                    {
                        window.location.pathname.includes('/logined/registration') ?
                            <li className={s.menuItem} onClick={() => {
                                navigate("/logined/registrationweek")
                            }}
                                style={{backgroundColor: 'rgb(236, 236, 236)'}}
                            >
                                <div className={s.calendar}></div>
                            </li>
                            :
                            <li className={s.menuItem} onClick={() => {
                                navigate("/logined/registrationweek")
                            }}
                            >
                                <div className={s.calendar}></div>
                            </li>
                    }

                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;