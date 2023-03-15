import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {userSlice} from "./UserSlice";
import {ILoginRequest} from "../../api/auth/types";
import {Dispatch} from "react";
import { loginStart, loginSuccess, loginFailure, logoutSuccess } from "./AuthSlice";
import api from "../../api"

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching());
        const response = await axios.get<IUser[]>('http://192.168.1.205:8081/visits?day=2023-02-15&doctorId=10');
        dispatch(userSlice.actions.usersFetchingSuccess(response.data));

    } catch (e: any) {
        dispatch(userSlice.actions.usersFetchingError(e.message))
    }
}

export const loginUser = (data: ILoginRequest) =>
    async (dispatch: Dispatch<any>):Promise<void> => {
        try {
            dispatch(loginStart());
            const res = await api.auth.login(data);
            dispatch(loginSuccess(res.data.accessToken))
        } catch (e: any) {
            console.log(e)
            dispatch(loginFailure(e.message))
        }
}

