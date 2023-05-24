import React, {useEffect} from 'react';
import s from "./TableContent.module.scss"
import moment from 'moment';
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../../../../hooks/redux";
import {fetchVisit} from "../../../../../../store/reducers/ActioanCreators";
import {IVisit} from "../../../../../../models/IVisit";
// import {addVisit} from "../../../../../../store/reducers/ProfileSlice"
import {setData} from "../../../../../../store/reducers/ActioanCreators";


const TableContent = () => {

    const visit = useAppSelector(state => state.visitsReducer.visit);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    // При вмотировании 1 раз получаем визиты
    useEffect(() => {
        dispatch(fetchVisit());
    }, []);

    // Если визиты в сторе поменялись:



    const allCardsForWeek = () => {
        const oneCard = (day: number, startTime: string, endTime: string,  surname: string, name: string, patronymic: string, content: string, cabinet: string, serviceType: string, key: string) => {

            const stH = +(moment(startTime, 'LT').format('H'));
            const stM = +(moment(startTime, 'LT').format('m'));
            const eH = +(moment(endTime, 'LT').format('H'));
            const eM = +(moment(endTime, 'LT').format('m'));
            let duration = (eH * 60 + eM) - (stH * 60 + stM);

            //Защита, если время приёма очень мало
            (duration < 5) && (duration = 38);

            const verticalShift = ((((stH * 60 + stM - 8 * 60) * 730) / (9 * 60)).toString() + 'px');
            const horisontalShift = 0 + 'px';
            const cardHeight = ((80 / 60) * duration).toString() + 'px';
            const contentFontSize = (((80 / 60) * duration) / 2.3).toString() + 'px';

            const styles =
                {
                    backgroundColor: 'rgba(201, 242, 255, 1)',
                    
                    transform: `translateY(${verticalShift}) translateX(${horisontalShift})`,
                    height: cardHeight,
                    lineHeight: cardHeight
                }

            return (
                <Link to = "/logined/profile" className={s.cardLink}>
                <div className={s.card} style={styles} key={key} onClick={() => {
                        dispatch(setData({
                            surname,
                            name,
                            patronymic
                          }));
                    }}>
                    <span className={s.Circle}></span>

                    <div className={s.Info}>
                        <div>{startTime} - {endTime}</div>
                        <div  className={s.Client}>
                            {surname}
                            {name}
                            {patronymic}
                        </div>
                        <div className={s.Cabinet}>{cabinet}</div>
                        <div className={s.Type}>{serviceType}</div>
                    </div>
                </div>
                </Link>
            )
        }
        
    
        const cardInfoParse = (i: IVisit) => {
            const day = +(moment(i.dateStart, moment.ISO_8601).format('E'));
            const startTime = moment(i.dateStart, moment.ISO_8601).zone("+00:00").format('LT');
            const endTime = moment(i.dateStart, moment.ISO_8601).zone("+01:00").format('LT');
            const surname = i.client.surname + " ";
            const name = i.client.name + " ";
            const patronymic = i.client.patronymic;
            const content = i.comment;
            const cabinet = i.cabinet;
            const serviceType = i.serviceType;
            const key = i.id_visit
            return {day, startTime, endTime, surname, name, patronymic, content, cabinet, serviceType, key}
        }

        return visit.map((t, i) =>
            oneCard(
                cardInfoParse(visit?.[i]).day,
                cardInfoParse(visit?.[i]).startTime,
                cardInfoParse(visit?.[i]).endTime,
                cardInfoParse(visit?.[i]).surname,
                cardInfoParse(visit?.[i]).name,
                cardInfoParse(visit?.[i]).patronymic,
                cardInfoParse(visit?.[i]).content,
                cardInfoParse(visit?.[i]).cabinet,
                cardInfoParse(visit?.[i]).serviceType,
                cardInfoParse(visit?.[i]).key
            )
        )
    }

    return (
        <div className={s.tableContent}>

            {
                (visit.length > 0) && allCardsForWeek()
            }

        </div>
    );
};

export default TableContent;