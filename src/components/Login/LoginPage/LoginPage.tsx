import React from "react";
import s from './login.module.scss';
import { useNavigate } from 'react-router-dom';





function Loginpage() {

    const navigate = useNavigate();


    return (
        <div className = {s.logForm}>
                <form className = {s.forma}>
                    <div>
                        <h4 className= {s.label}>Имя пользователя</h4>
                        <input type="text" name = "name" className = {s.inputs} />
                    </div>
                    <div>
                        <h4 className= {s.label}>Фамилия</h4>
                        <input type="text" name = "surname" className = {s.inputs} />
                    </div>
                    <div>
                        <h4 className= {s.label}>E-mail</h4>
                        <input type="text" name = "email" className = {s.inputs} />
                    </div>
                    <div>
                        <h4 className= {s.label}>Пароль</h4>
                        <input type="password" name = "password" className = {s.inputs} />
                    </div>
                    <div>
                        <h4 className= {s.label}>Подтверждение пароля</h4>
                        <input type="password" name = "password" className = {s.inputs} />
                    </div>

                    <div>
                        <button type = "submit" className = {s.fbutton}
                                onClick={()=>{navigate("/logined/appoinments")}}>Создать</button>
                    </div>
                    
                </form>

                <div className= {s.btnRight}/>
        </div>
    );
};

export default Loginpage;


