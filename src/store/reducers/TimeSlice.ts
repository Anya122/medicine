import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import moment from 'moment';

const initialState = {
    // Номер недели в году, которую выбрали
    selectedWeek: +(moment().format('w')),
    // На сколько и в какую сторону от сегодняшней даты сдвинули календарь по неделям
    weekBias: 0,
};


export const timeSlice = createSlice({
    name: 'time',
    initialState,
    reducers: {
        setNewPeriodByWeek(state, action: PayloadAction<string>) {
            switch (action.payload) {
                case 'nextWeek':
                    state.weekBias += 1;
                    state.selectedWeek = +(moment().subtract(-(state.weekBias), 'week').format('w'))
                    break;
                case 'thisWeek':
                    state.weekBias = 0;
                    state.selectedWeek = +(moment().format('w'));
                    break;
                case 'prevWeek':
                    state.weekBias -= 1;
                    state.selectedWeek = +(moment().subtract(-(state.weekBias), 'week').format('w'))
                    break;
            }
        }
    }
})

export default timeSlice.reducer;