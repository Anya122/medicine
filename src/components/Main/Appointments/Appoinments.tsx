import React from "react";
import s from "./Appoinments.module.scss"
import Schedule from "./Schedule/Schedule";
import UpButtons from "./UpButtons/UpButtons";
import LeftMenu from "./LeftMenu/LeftMenu";



const Appoinments = () => {
    return (
        <div className={s.main}>
            <UpButtons/>
            
            <div className={s.wrapper}>
                
                <LeftMenu/>
                <Schedule />
               



            </div>

        </div>
    );
};

export default Appoinments;