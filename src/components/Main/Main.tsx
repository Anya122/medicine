import React from "react";
import {Route, Routes} from "react-router-dom";
import s from "./Main.module.scss"
import RegistrationWeek from "./RegistrationWeek/RegistrationWeek";
import RegistrationDay from "./RegistrationDay/RegistrationDay";
import Profile from "./Profile/Profile";
import Appoinments from "./Appointments/Appoinments";

const Main = () => {
    return (
        <div className={s.main}>
            <Routes>
                <Route path="/registrationweek/*"
                       element={<RegistrationWeek/>}/>

                <Route path="/registrationday/*"
                       element={<RegistrationDay/>}/>

                <Route path="/profile/*"
                       element={<Profile/>}/>

                <Route path="/appoinments/*"
                       element={<Appoinments/>}/>
            </Routes>
        </div>
    );
};

export default Main;