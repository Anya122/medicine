import React from "react";
import {Route, Routes} from "react-router-dom";
import s from "./Main.module.scss"
import Schedule from "./Schedule/Schedule";
import ScheduleByDay from "./ScheduleByDay/ScheduleByDay";

const Main = () => {
    return (
        <div className={s.main}>
            <Routes>
                <Route path="/schedule/*"
                       element={<Schedule/>}/>

                <Route path="/schedulebyday/*"
                       element={<ScheduleByDay/>}/>
            </Routes>
        </div>
    );
};

export default Main;