import React from "react";
import s from './Header.module.scss'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logo}>

            </div>
            <div className={s.userMenu}>
                <div className={s.userName}>Сергеев Сергей Сергеевич</div>
                <button className={s.button} onClick={()=>{}}></button>
                <div className={s.userPic}>
                    <span className={s.userInitials}>С С</span>
                </div>
            </div>
        </div>
    );
};

export default Header;