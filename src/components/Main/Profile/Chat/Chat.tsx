import React from "react";
import s from "./Chat.module.scss"
import Face from "../assets/face-happy.svg"
import Traced from "../assets/traced.svg"
import Mic from "../assets/mic.svg"



const Patient = () => {
    return (
        <div className={s.Chat}>
            <div className={s.ChatMain}>
                <div className={s.ChatTop}>
                    <div className={s.ChatAvatar}></div>
                    <div className={s.ChatName}>Константинов Константин </div>
                </div>

                <div className={s.ChatMess}>
                    <div>Здесь пока нет сообщений...</div>
                    
                </div>
                

            </div>
            <div className={s.ChatBottom}>
                
                <div className={s.ChatMedia}>
                     <img className={s.Media} src={Face}/>
                    <div className={s.Mess}>Сообщение</div>
                </div>    

                <div className={s.ChatMedia}>
                     <img className={s.Media} src={Traced}/>
                     <img className={s.Media} src={Mic}/>
                </div>
            
            </div>
            
            
            
        </div>
        );

};

export default Patient;