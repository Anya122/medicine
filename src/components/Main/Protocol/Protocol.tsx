import React from 'react';
import s from './Protocol.module.scss';
import ProtocolUp from "./ProtocolUp/ProtocolUp";
import ProtocolInfo from './ProtocolInfo/ProtocolInfo';
import ProtocolResults from './ProtocolResults/ProtocolResults';
import Medicaments from './Medicaments/Medicaments';


function Protocol() {
  
  return (
    <div className={s.Protocol}>
      <div className={s.ProtocolMain}>
        <ProtocolUp/>
        <div className={s.ProtocolWrapper}>
          <ProtocolInfo/>
          <ProtocolResults/>
        </div>
        
      </div>
        <Medicaments/>
    </div>
  );
}

export default Protocol;
