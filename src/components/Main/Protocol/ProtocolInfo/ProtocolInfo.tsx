import React from 'react';
import s from './ProtocolInfo.module.scss';



function ProtocolInfo() {
  
  return (
    <div className={s.ProtocolInfo}>
        <div className={s.Info}>
            <div className={s.InfoName}>Дата:</div>
            <div className={s.InfoItem}>5.10.22</div>
        </div>
        <div className={s.Info}>
            <div className={s.InfoName}>ФИО пациента:</div>
            <div className={s.InfoItem}>Константинов Константин Константинвич</div>
        </div>
        <div className={s.Info}>
            <div className={s.InfoName}>Дата рождения:</div>
            <div className={s.InfoItem}>14.10.2000 </div>
        </div>
    </div>
  );
}

export default ProtocolInfo;
