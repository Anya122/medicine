import React from "react";
import s from "./Properties.module.scss"
import Select from "./Select/Select";
import SpecialistFinder from "./SpecialistFinder/SpecialistFinder";
import ViewSelector from "./ViewSelector/ViewSelector";


const Properties = () => {
    return (
        <div className={s.properties}>

            <h3 className={s.header}>Расписание</h3>

            <Select key={'календарь'} />

            <span className={s.specialistTitle}>Специалист</span>
            <SpecialistFinder placeholder="ФИО"/>

            <span className={s.specialistTitle}>Специальность</span>
            <SpecialistFinder placeholder="Специальность"/>


            <ViewSelector />






        </div>
    );
};

export default Properties;