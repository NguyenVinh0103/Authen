import { authTypes } from ".";

export function onRegister(params, dispatch) {
    return new Promise((resolve, reject) => {
        dispatch({
            type: authTypes.REGISTER,
            params,
            resolve,
            reject,
        });
    });
}
export function onLogin(params, dispatch) {
    return new Promise((resolve, reject) => {
        dispatch({
            type: authTypes.LOGIN,
            params,
            resolve,
            reject,
        });
    });
}