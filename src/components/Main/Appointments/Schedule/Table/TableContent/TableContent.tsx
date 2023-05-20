import React, {useEffect} from 'react';
import s from "./TableContent.module.scss"
import moment from 'moment';

import {useAppDispatch, useAppSelector} from "../../../../../../hooks/redux";
import {fetchVisit} from "../../../../../../store/reducers/ActioanCreators";
import {IVisit} from "../../../../../../models/IVisit";


const TableContent = () => {

    const visit = useAppSelector(state => state.visitsReducer.visit);
    const dispatch = useAppDispatch();

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
                <div className={s.card} style={styles} key={key}>

                    <span className={s.Circle}></span>

                    <div className={s.Info}>
                        <div>{startTime} - {endTime}</div>
                        <div  className={s.Client}>
                            {surname}
                            {name}
                            {patronymic}
                        </div>
                        <div>{cabinet}</div>
                        <div>{serviceType}</div>
                    </div>
                    
                    
                    
                </div>
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