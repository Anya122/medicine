import React from "react";
import s from "./ProfileBtns.module.scss"


const ProfileBtns = () => {
    return (
        <div className={s.ProfileBtns}>
            
        

        <div className={s.Btns}>
            <button className={s.BtnItem} onClick={()=>{}}>Сведения</button>
            <button className={s.BtnItem} onClick={()=>{}}>Услуги</button>
            <button className={s.BtnItem} onClick={()=>{}}>Документы</button>
        </div>




        </div>
    );
};

export default ProfileBtns;