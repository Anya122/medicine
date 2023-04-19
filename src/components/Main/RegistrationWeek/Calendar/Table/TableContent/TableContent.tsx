import React from 'react';
import s from "./TableContent.module.scss"
import moment from 'moment';


const TableContent = () => {






    const oneCard = (day: number, startTime: string, endTime: string, content: string) => {

        const stH = +(moment(startTime, 'LT').format('H'));
        const stM = +(moment(startTime, 'LT').format('m'));
        const eH = +(moment(endTime, 'LT').format('H'));
        const eM = +(moment(endTime, 'LT').format('m'));
        const duration = (eH * 60 + eM) - (stH * 60 + stM);

        const verticalShift = ((((stH * 60 + stM - 8 * 60) * 730) / (9 * 60)).toString() + 'px');
        const horisontalShift = ((day-1) * 181).toString()+'px';
        const cardHeight = ((80 / 60) * duration).toString() + 'px';
        const contentFontSize = (((80 / 60) * duration)/2.3).toString() + 'px';

        const styles =
            {
                backgroundColor: 'rgba(201, 242, 255, 1)',
                fontSize: contentFontSize,
                transform: `translateY(${verticalShift}) translateX(${horisontalShift})`,
                height: cardHeight,
                lineHeight: cardHeight
            }

        return (
            <div className={s.card} style={styles}>
                {content}
            </div>
        )
    }


    return (
        <div className={s.tableContent}>

            {
                oneCard(1, "8:15", "8:35", "Петров")
            }
            {
                oneCard(3, "12:08", "13:00", "Сидоров")
            }
            {
                oneCard(4, "9:00", "10:00", "Яковлев")
            }
            {
                oneCard(7, "11:15", "11:39", "Потапов")
            }

        </div>
    );
};

export default TableContent;