/*login*/

export interface ILoginRequest {
    password: string;
    username: string;
}

export interface ILoginResponse {
    accessToken: string;
}