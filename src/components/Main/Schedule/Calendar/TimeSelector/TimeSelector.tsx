import React, {useEffect, useState} from 'react';
import s from "./TimeSelector.module.scss"

import moment from 'moment';
import 'moment/locale/ru';

const TimeSelector = () => {

    moment.locale('ru');

    const [time, setTime] = useState(moment());
    const [selectedPeriod, setSelectedPeriod] = useState(
        {
            startDay: moment().weekday(0).format('D'),
            endDay: moment().weekday(6).format('D'),
            startWeekMonth: moment().weekday(0).format('MMMM'),
            endWeekMonth: moment().weekday(6).format('MMMM'),
        });

    const changePeriod = (shift: number) => {
        switch (shift) {
            case 1:
                setTime(moment(time).subtract(-1, 'week'));
                break;
            case 0:
                setTime(moment(time).subtract(0, 'week'));
                break;
            case (-1):
                setTime(moment(time).subtract(1, 'week'));
                break;
        }
    };

    useEffect(()=> {
        setSelectedPeriod(
        {
            startDay: moment(time).weekday(0).format('D'),
            endDay: moment(time).weekday(6).format('D'),
            startWeekMonth: moment(time).weekday(0).format('MMMM'),
            endWeekMonth: moment(time).weekday(6).format('MMMM'),
        });
    }, [time])


    return (
        <div className={s.timeSelector}>
            <button className={s.leftButton} onClick={()=> {changePeriod(-1)}}/>
            <span className={s.period}>
                {
                    selectedPeriod.endWeekMonth === selectedPeriod.startWeekMonth ?
                        `${selectedPeriod.startDay} - ${selectedPeriod.endDay} ${selectedPeriod.endWeekMonth}`
                        :
                        `${selectedPeriod.startDay} ${selectedPeriod.startWeekMonth}
                        - ${selectedPeriod.endDay} ${selectedPeriod.endWeekMonth}`
                }
            </span>
            <button className={s.rightButton} onClick={()=> {changePeriod(1)}}/>
        </div>
    );
};

export default TimeSelector;