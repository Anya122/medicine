import React from 'react';
import s from './ProtocolUp.module.scss';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import { RootState } from "../../../../store/store";
import {updateVariable} from "../../../../store/reducers/ActioanCreators";
import { useDispatch } from "react-redux";


function ProtocolUp() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myVariable = useSelector((state: RootState) => state.setReducer.save);

  const handleClick = () => {
    const newValue = !myVariable;
    dispatch(updateVariable(newValue));
    navigate("/logined/profile")
  }
  
  return (
    <div className={s.ProtocolUp}>
        <div className={s.Back}>
          <div className={s.BackArr}></div>
          <div className={s.BackText} onClick={()=>{{navigate("/logined/profile")}}}>Назад</div>
        </div>

        <div className={s.ProtocolBtns}>
          <button className={s.ProtocolBtn} onClick={()=>{}}>Печать</button>
          <button className={s.ProtocolBtn} onClick={handleClick}>Сохранить</button>
          <button className={s.ProtocolBtn} onClick={()=>{}}>Закрыть</button>
        </div>
        
    </div>
  );
}

export default ProtocolUp;
