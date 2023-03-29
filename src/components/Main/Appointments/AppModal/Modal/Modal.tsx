import React, { ReactNode } from "react";
import s from "./Modal.module.scss";
import FormModal from "../FormModal/FormModal";
import FirstModal from "../FirstModal/FirstModal";
import { asd } from "../FirstModal/FirstModal";


export interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  firstForm: boolean;
}



export  function closeModal(props: ModalType) {
  props.isOpen = false;
}


export default function Modal(props: ModalType) {
  return (
    <div>
      {props.isOpen && (
        <div className= {s.modaloverlay} onClick={props.toggle}>
          {props.firstForm ? 
          (<div onClick={(e) => e.stopPropagation()}  className={s.firstmodalbox}>
            <FirstModal/>
            
            {props.children}
           
          </div>)
          :
          (<div onClick={(e) => e.stopPropagation()}  className={s.modalbox}>
          <FormModal/>
          <button className={s.ModalBtn} onClick={props.toggle} >Ок</button>
          
          {
          props.children}
        </div>)
          }
          
          
          
          
        </div>
      )}
    </div>
  );
}

