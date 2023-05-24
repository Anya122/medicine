import React from "react";
import s from "./Patient.module.scss";
import ProfileBtns from "../ProfileBtns/ProfileBtns";
import Files from "../Files/Files";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import { RootState } from "../../../../store/store";
import {IVisit} from "../../../../models/IVisit";
import start from "../assets/Start.svg"
import stop from "../assets/pause.png"



const Patient = () => {

    const navigate = useNavigate();
    
    const surname = useSelector((state:RootState) => state.setReducer.data.surname);
    const name = useSelector((state:RootState) => state.setReducer.data.name);
    const patronymic = useSelector((state:RootState) => state.setReducer.data.patronymic);
    
    const save = useSelector((state: RootState) => state.setReducer.save);
    
    

    return (
        <div className={s.Patient}>
            <ProfileBtns/> 
            <div className={s.PatientMain}>
            <div>
                <div className={s.PatientNum}>Пациент № 050</div>

          
            
            <div className={s.ThisPatient}>
                <div className={s.PatientImg}></div>
                <div className={s.PatientName}>{surname}{name}{patronymic}</div>
            </div>

            <div className={s.AboutPatient}>
                <div className={s.Names}>
                    <div className={s.AboutName}>Дата рождения</div>
                    <div className={s.AboutName}>Возраст</div>
                    <div className={s.AboutName}>Амбулаторная карта</div>
                    <div className={s.AboutName}>Причина обращения</div>
                    <div className={s.AboutName}>Комментарии</div>
                </div>

                <div className={s.Info}>
                    <div className={s.AboutInfo}>14.10.2005</div>
                    <div className={s.AboutInfo}>17</div>
                    <div className={s.AboutInfo}>00203</div>
                    <div className={s.AboutInfo}>Болит живот</div>
                    <div className={s.AboutInfo}>Есть анализы</div>

                </div>
            </div>

            <button  className={s.PatientBtn} onClick={()=>{navigate("/logined/protocol")}}>
                {save? 'Завершить прием': 'Начать прием'}

                <img  className={s.ArrBtn} src = {save? stop: start}></img>


            </button>
            
            </div>
            <Files/>
            </div>
            
        </div>
        );

};

export default Patient;