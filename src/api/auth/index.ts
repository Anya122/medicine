import {axiosInstance} from "./instance";
import {ILoginRequest, ILoginResponse} from "./types";
import {AxiosPromise} from "axios";
import Endpoints from "../endpoints";

export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
    axiosInstance.post(Endpoints.AUTH.LOGIN, params)