import s from "./TimeSelector.module.scss"
import moment from 'moment';
import 'moment/locale/ru';
import {timeSlice} from "../../../../../store/reducers/TimeSlice";
import {useAppDispatch, useAppSelector} from "../../../../../hooks/redux";
import React from "react";

const TimeSelector = () => {

    moment.locale('ru');

    const {setNewPeriodByWeek} = timeSlice.actions;
    const {selectedWeek} = useAppSelector(state => state.timeReducer);
    const dispatch = useAppDispatch();

    const selectedPeriod = {
        startDay: moment(selectedWeek.toString(), 'w').weekday(0).format('D'),
        endDay: moment(selectedWeek.toString(), 'w').weekday(6).format('D'),
        startWeekMonth: moment(selectedWeek.toString(), 'w').weekday(0).format('MMMM'),
        endWeekMonth: moment(selectedWeek.toString(), 'w').weekday(6).format('MMMM'),
    }

    return (
        <div className={s.timeSelector}>
            <button className={s.leftButton} onClick={() => {
                dispatch(setNewPeriodByWeek('prevWeek'));
            }}/>
            <span className={s.period}>
                {
                    selectedPeriod.endWeekMonth === selectedPeriod.startWeekMonth ?
                        `${selectedPeriod.startDay} - ${selectedPeriod.endDay} ${selectedPeriod.endWeekMonth}`
                        :
                        `${selectedPeriod.startDay} ${selectedPeriod.startWeekMonth}
                        - ${selectedPeriod.endDay} ${selectedPeriod.endWeekMonth}`
                }
            </span>
            <button className={s.rightButton} onClick={() => {
                dispatch(setNewPeriodByWeek('nextWeek'));
            }}/>

            <button className={s.defaultPeriodButton} onClick={()=>{dispatch(setNewPeriodByWeek('thisWeek'))}}/>

        </div>
    );
};

export default TimeSelector;