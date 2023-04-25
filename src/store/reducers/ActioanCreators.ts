import {AppDispatch} from "../store";
import axios from "axios";
import {IVisit} from "../../models/IVisit";
import {visitSlice} from "./VisitSlice";


export const fetchVisit = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(visitSlice.actions.visitFetching());
        const response = await axios.get<IVisit[]>('http://192.168.1.205:8000/api/visits?period=week&startDate=2023-05-07');

        dispatch(visitSlice.actions.visitFetchingSuccess(response.data));

    } catch (e: any) {
        dispatch(visitSlice.actions.visitFetchingError(e.message))
    }
}
