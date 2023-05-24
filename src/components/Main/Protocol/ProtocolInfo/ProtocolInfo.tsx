import React from 'react';
import s from './ProtocolInfo.module.scss';
import {useSelector} from "react-redux";
import { RootState } from "../../../../store/store";
import {updateVariable} from "../../../../store/reducers/ActioanCreators";
import { useDispatch } from "react-redux";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";

function ProtocolInfo() {
    const surname = useSelector((state:RootState) => state.setReducer.data.surname);
    const name = useSelector((state:RootState) => state.setReducer.data.name);
    const patronymic = useSelector((state:RootState) => state.setReducer.data.patronymic);

    
     
  
  return (
    <div className={s.ProtocolInfo}>
        <div className={s.Info}>
            <div className={s.InfoName}>Дата:</div>
            <div className={s.InfoItem}>5.10.22</div>
        </div>
        <div className={s.Info}>
            <div className={s.InfoName}>ФИО пациента:</div>
            <div className={s.InfoItem}>{surname}{name}{patronymic}</div>
        </div>
        <div className={s.Info}>
            <div className={s.InfoName}>Дата рождения:</div>
            <div className={s.InfoItem}>14.10.2000 </div>
        </div>
    </div>
  );
}

export default ProtocolInfo;
