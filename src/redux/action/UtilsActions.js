import { UtilTypes } from "./utilsTypes"


export const demoAction = (params, dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: UtilTypes.DEMO_ACTION, //Channel can quan tam
            params,
            resolve,
            reject,
        })
    })
}

export const demoCallApi = (params, dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: UtilTypes.DEMO_CALL_API, //Channel can quan tam
            params,
            resolve,
            reject,
        })
    })
}