import {IVisit} from "../../models/IVisit";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface VisitState {
    visit: IVisit[];
    isLoading: boolean;
    error: string;
}


const initialState: VisitState = {
    visit: [],
    isLoading: false,
    error: '',
};

export const visitSlice = createSlice({
    name: 'visit',
    initialState,
    reducers: {
        visitFetching(state) {
            state.isLoading = true;
        },
        visitFetchingSuccess(state, action: PayloadAction<IVisit[]>) {
            state.isLoading = false;
            state.error = '';
            state.visit = action.payload;
        },
        visitFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },

    }
})

export default visitSlice.reducer;
