import React from "react";
import s from "./Profile.module.scss"
import Patient from "./Patient/Patient";
import Chat from "./Chat/Chat";
import {useNavigate} from "react-router-dom";


const Profile = () => {
    
    const navigate = useNavigate();

    return (
        <div className={s.Profile}>
            <div className={s.Back}>
                <div className={s.BackArr}></div>
                <div className={s.BackText} onClick={()=>{{navigate("/logined/appoinments")}}}>Назад</div>
            </div>
            
            <div className={s.ProfileMain}>   
                <Patient/>
                
                <Chat/>
            </div>
            
            

        </div>
    );
};

export default Profile;