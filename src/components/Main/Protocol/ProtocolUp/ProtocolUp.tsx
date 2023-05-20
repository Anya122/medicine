import React from 'react';
import s from './ProtocolUp.module.scss';
import {useNavigate} from "react-router-dom";



function ProtocolUp() {

  const navigate = useNavigate();
  
  return (
    <div className={s.ProtocolUp}>
        <div className={s.Back}>
          <div className={s.BackArr}></div>
          <div className={s.BackText} onClick={()=>{{navigate("/logined/profile")}}}>Назад</div>
        </div>

        <div className={s.ProtocolBtns}>
          <button className={s.ProtocolBtn} onClick={()=>{}}>Печать</button>
          <button className={s.ProtocolBtn} onClick={()=>{}}>Сохранить</button>
          <button className={s.ProtocolBtn} onClick={()=>{}}>Закрыть</button>
        </div>
        
    </div>
  );
}

export default ProtocolUp;
