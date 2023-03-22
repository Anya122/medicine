import React from "react";
import s from "./Properties.module.scss"
import Select from "./Select/Select";
import SpecialistFinder from "./SpecialistFinder/SpecialistFinder";
import RecentList from "./RecentList/RecentList";
import ViewSelector from "./ViewSelector/ViewSelector";


const Properties = () => {
    return (
        <div className={s.properties}>

            <h3 className={s.header}>Расписание</h3>

            <Select />

            <span className={s.specialistTitle}>Специалист</span>

            <SpecialistFinder />

            <RecentList />

            <ViewSelector />
        </div>
    );
};

export default Properties;