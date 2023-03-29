import React from "react";
import s from "./FormModal.module.scss";


const FormModal = () => {
    return (
        <div className={s.FormModal}>
            <h3 className={s.FormName}>Изменение посещения</h3>
            <span className={s.Client}>Клиент:</span>
            <span className={s.ClientName}>Константинов Константин К...</span>

            <div className={s.ModalItems}>
                <div>
                    <label className={s.Modallabel}>Дата </label>
                    <input type = "text" id = "date" className={s.ModalInput}></input>
                </div>
                <div>
                    <label className={s.Modallabel}>Время </label>
                    <input type = "text" id = "time" className={s.ModalInput}></input>
                </div>
                <div>
                    <label className={s.Modallabel}>Кабинет </label>
                    <input type = "text" id = "office" className={s.ModalInput}></input>
                </div>
                <div>
                    <label className={s.Modallabel}>Врач </label>
                    <input type = "text" id = "doctor" className={s.ModalInput}></input>
                </div>
            </div>

            {/* <button className={s.ModalBtn}>Ок</button> */}
        </div>

    );
};

export default FormModal;

