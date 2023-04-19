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
        const oneCard = (day: number, startTime: string, endTime: string, content: string, key: string) => {

            const stH = +(moment(startTime, 'LT').format('H'));
            const stM = +(moment(startTime, 'LT').format('m'));
            const eH = +(moment(endTime, 'LT').format('H'));
            const eM = +(moment(endTime, 'LT').format('m'));
            let duration = (eH * 60 + eM) - (stH * 60 + stM);

            //Защита, если время приёма очень мало
            (duration < 5) && (duration = 15);

            const verticalShift = ((((stH * 60 + stM - 8 * 60) * 730) / (9 * 60)).toString() + 'px');
            const horisontalShift = ((day - 1) * 181).toString() + 'px';
            const cardHeight = ((80 / 60) * duration).toString() + 'px';
            const contentFontSize = (((80 / 60) * duration) / 2.3).toString() + 'px';

            const styles =
                {
                    backgroundColor: 'rgba(201, 242, 255, 1)',
                    fontSize: contentFontSize,
                    transform: `translateY(${verticalShift}) translateX(${horisontalShift})`,
                    height: cardHeight,
                    lineHeight: cardHeight
                }

            return (
                <div className={s.card} style={styles} key={key}>
                    {content}
                </div>
            )
        }

        const cardInfoParse = (i: IVisit) => {
            const day = +(moment(i.beginTime, moment.ISO_8601).format('E'));
            const startTime = moment(i.beginTime, moment.ISO_8601).format('LT');
            const endTime = moment(i.endTime, moment.ISO_8601).format('LT');
            const content = i.comment;
            const key = i.id_visit
            return {day, startTime, endTime, content, key}
        }

        return visit.map((t, i) =>
            oneCard(
                cardInfoParse(visit?.[i]).day,
                cardInfoParse(visit?.[i]).startTime,
                cardInfoParse(visit?.[i]).endTime,
                cardInfoParse(visit?.[i]).content,
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