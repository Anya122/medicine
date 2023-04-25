import React from 'react';
import s from './ProtocolResults.module.scss';




function ProtocolResults() {
  
  return (
    <div className={s.ProtocolResults}>
        <h1 className={s.ProtocolName}>Протокол консультации врача</h1>
        <div className={s.Complaints}>
          <div className={s.Info}>
              <div className={s.InfoName}>Жалобы:</div>
              <div className={s.InfoItem}></div>
          </div>
              <div className={s.Info}>
              <div className={s.InfoName}>Анамнез заболевания:</div>
              <div className={s.InfoItem}></div>
          </div>
          <div className={s.Info}>
              <div className={s.InfoName}>Анамнез жизни:</div>
              <div className={s.InfoItem}></div>
          </div>
          <div className={s.Info}>
              <div className={s.InfoName}>Перенесенные заболевания:</div>
              <div className={s.InfoItem}>Насморк, аритмия, остеохандроз</div>
          </div>
          <div className={s.Info}>
              <div className={s.InfoName}>Гометрансфузии:</div>
              <div className={s.InfoItem}>Не было</div>
          </div>
        </div>
    </div>
  );
}

export default ProtocolResults;
