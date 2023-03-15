import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import IVisit from "../../models/IVisit";
import {visits} from "../../fakeData/fakeVisits";


const initialState: IVisit[] = structuredClone(visits);


export const visitsSlice = createSlice({
    name: 'visits',
    initialState,
    reducers: {

    }
})

export default visitsSlice.reducer;