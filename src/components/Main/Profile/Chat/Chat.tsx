import React from "react";
import s from "./Chat.module.scss"



const Patient = () => {
    return (
        <div className={s.Chat}>
            <div className={s.ChatMain}>
                <div className={s.ChatTop}>
                    <div className={s.ChatAvatar}></div>
                    <div className={s.ChatName}>Константинов Константин </div>
                </div>

                <div className={s.ChatMess}>
                    
                    
                </div>
                

            </div>
            <div className={s.ChatBottom}>
                

            
            </div>
            
            
            
        </div>
        );

};

export default Patient;