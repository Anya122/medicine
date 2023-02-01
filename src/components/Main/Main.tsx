import React from "react";
import s from "./Main.module.scss"
import Schedule from "./Schedule/Schedule";

const Main = () => {
    return (
        <div className={s.main}>
            <Schedule />
        </div>
    );
};

export default Main;