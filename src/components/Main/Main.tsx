import React from "react";
import {Route, Routes} from "react-router-dom";
import s from "./Main.module.scss"
import Schedule from "./Schedule/Schedule";
import ScheduleByDay from "./ScheduleByDay/ScheduleByDay";
import Profile from "./Profile/Profile";
import Appoinments from "./Appointments/Appoinments";

const Main = () => {
    return (
        <div className={s.main}>
            <Routes>
                <Route path="/schedule/*"
                       element={<Schedule/>}/>

                <Route path="/schedulebyday/*"
                       element={<ScheduleByDay/>}/>

                <Route path="/profile/*"
                       element={<Profile/>}/>

                <Route path="/appoinments/*"
                       element={<Appoinments/>}/>
            </Routes>
        </div>
    );
};

export default Main;