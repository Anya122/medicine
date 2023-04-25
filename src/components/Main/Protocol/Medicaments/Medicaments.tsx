import React from 'react';
import s from './Medicaments.module.scss';



function Medicaments() {
  
  return (
    <div className={s.Medicaments}>
      <div className={s.Head}>
        <div className={s.Arrow}></div>
        <div className={s.Label}>Возможные препараты</div>
      </div>

      <div className={s.SearchBox}>
        <button type="submit" className={s.SearchBtn}></button>
        <input type="text" className={s.Search} placeholder="Препарат или рецепт"/>
      </div>
      
      <div className={s.Items}>
        <div className={s.LabelI}>Препараты</div>
        <div className={s.LabelI}>Рецепты</div>

        <div className={s.MedItem}>
          <div className={s.Item}>
            <input className={s.Check} type="checkbox" id = "checkbox1"/>
            <label htmlFor="checkbox1"></label>
          </div>
          <div className={s.LabelI}>Називин</div>
        </div>
        <div className={s.MedItem}>
          <div className={s.Item}>
            <input className={s.Check} type="checkbox" id = "checkbox2"/>
            <label htmlFor="checkbox2"></label>
          </div>
          <div className={s.LabelI}>Арбидол</div>
        </div>
        <div className={s.MedItem}>
          <div className={s.Item}>
            <input className={s.Check} type="checkbox" id = "checkbox3"/>
            <label htmlFor="checkbox3"></label>
          </div>
          <div className={s.LabelI}>Название</div>
        </div>
        <div className={s.MedItem}>
          <div className={s.Item}>
            <input className={s.Check} type="checkbox" id = "checkbox4"/>
            <label htmlFor="checkbox4"></label>
          </div>
          <div className={s.LabelI}>Название</div>
        </div>
      </div>
        
    </div>
  );
}

export default Medicaments;
