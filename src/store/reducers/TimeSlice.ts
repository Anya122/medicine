import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import moment from 'moment';

const initialState = {
    selectedWeek: +(moment().format('w')),
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