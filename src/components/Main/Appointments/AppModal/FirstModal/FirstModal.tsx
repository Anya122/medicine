
import { useState } from "react";
import React, { ReactNode } from "react";
import s from "./FirstModal.module.scss";
import useModal from "../useModal/useModal";
import Modal from "../Modal/Modal";
import Table from "../../Schedule/Table/Table";
import { closeModal } from "../Modal/Modal";


// const { isOpen, toggle, firstForm } = useModal();
export let asd = false
const setForm = () => {
    asd = true;
    
};

const FirstModal = () => {
    return (
        <div className={s.FirstModal}>
            <div className={s.ModalOpen}>
                <span className={s.ModalText}>Открыть прием</span>
                <div className={s.ModalArrow}></div>
            </div>

            <div className={s.ModalChange}>
                <span className={s.ModalText}  onClick={setForm} >Изменить посещение</span>
                {asd = false}
                <div className={s.ModalClock}></div>
                
            </div>
            
        </div>

    );
};

export default FirstModal;