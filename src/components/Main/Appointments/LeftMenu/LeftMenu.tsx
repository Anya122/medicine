import React from "react";
import s from "./LeftMenu.module.scss"

const LeftMenu = () => {
    return (
        <div >
            <div className={s.menu}>
                <h3 className={s.name}>Записи на прием</h3>
                <span className={s.type}>Вид</span>
                <div className={s.btns}>
                    <button className={s.btn} onClick={()=>{}}>День</button>
                    <button className={s.btn} onClick={()=>{}}>Неделя</button>
                    <button className={s.btn} onClick={()=>{}}>Месяц</button>
                </div>
            </div>

            
        <div className={s.down}></div>

        
        </div>
        
    );
};

export default LeftMenu;