import React from "react";
import s from "./Properties.module.scss"
import Select from "./Select/Select";
import SpecialistFinder from "./SpecialistFinder/SpecialistFinder";


const Properties = () => {
    return (
        <div className={s.properties}>

            <h3 className={s.header}>Расписание</h3>

            <Select />

            <span className={s.specialistTitle}>Специалист</span>

            <SpecialistFinder />

            <ul>
                Последние
                <li>
                    Константин Константинов
                </li>
            </ul>

            <span>Вид</span>
            <button>День</button>
            <button>Неделя</button>
            <button>Месяц</button>

        </div>
    );
};

export default Properties;