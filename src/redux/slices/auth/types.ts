export interface IAuthState {
    registerSuccess: boolean;
    loginSuccess: boolean;
}

export type AuthAction = {
    payload: boolean;
};
