import React from "react";
import s from "./UpButtons.module.scss"
import {useNavigate} from "react-router-dom";

const UpButtons = () => {

    const navigate = useNavigate();

    return (
            
        <div className={s.buttons}>
            <button className={s.btn} onClick={()=>{navigate("/logined/profile")}}>Запись на прием</button>
            <button className={s.btn} onClick={()=>{}}>Медицинские записи</button>
            <button className={s.btn} onClick={()=>{}}>Отчеты</button>
            <button className={s.btn} onClick={()=>{}}>Экспорт в РМИС(ЕГИС 3)</button>
        </div>

    );
};

export default UpButtons;