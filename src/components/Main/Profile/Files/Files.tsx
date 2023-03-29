import React from "react";
import s from "./Files.module.scss"
import Cam from "../assets/Cam.svg"
import Video from "../assets/Video.svg"
import Volume from "../assets/Volume.svg"
import Mail from "../assets/Mail.svg"
import position from "../assets/position.svg"

const Patient = () => {
    return (
        <div className={s.Files}>
            
            <div className={s.File}>
                <img className={s.FilePic} src={Cam}/>
                <div className={s.FileName}>Фотография</div>
            </div>
            <div className={s.File}>
                <img className={s.FilePic} src={Video}/>
                <div className={s.FileName}>Видеозапись</div>
            </div>
            <div className={s.File}>
                <img className={s.FilePic} src={Volume}/>
                <div className={s.FileName}>Аудиозапись</div>
            </div>
            <div className={s.File}>
                <img className={s.FilePic} src={Mail}/>
                <div className={s.FileName}>Файл</div>
            </div>
            <div className={s.File}>
                <img className={s.FilePic} src={position}/>
                <div className={s.FileName}>Карта</div>
            </div>
            
            
            
            
        </div>
        );

};

export default Patient;