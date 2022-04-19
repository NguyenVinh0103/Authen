import { put, takeLatest } from 'redux-saga/effects';
import { UtilTypes } from '../action';

export function* doDemoAction(action) {
    try {
        const {params, resolve, reject} = action
        yield put({
            type: UtilTypes.DEMO_ACTION_SUCCESS,
            payload: params
        })
        resolve(true)
        ///// do register
    } catch (e) {
        console.log(e);
        action?.resolve(false);
    }
}

export function* doDemoCallApi(action) {
    try {
        const {params, resolve, reject} = action;

        const responeApi = yield fetch('https://jsonplaceholder.typicode.com/todos/1')
        const respone = yield responeApi.json()
        yield put({
            type: UtilTypes.DEMO_CALL_API_SUCCESS,
            payload: respone
        })
        resolve(respone)
        ///// do register
    } catch (e) {
        console.log(e);
        action?.resolve(false);
    }
}



export default function* watchUtilSagas() {
    yield takeLatest(UtilTypes.DEMO_ACTION, doDemoAction);
    yield takeLatest(UtilTypes.DEMO_CALL_API, doDemoCallApi);
}
