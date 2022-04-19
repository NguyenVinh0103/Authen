import { put, takeLatest } from 'redux-saga/effects';
import { authTypes } from '../action';

export function* doRegister(action) {
    try {
        yield put({type: authTypes.REGISTER_SUCCESS, payload: true})
        ///// do register
    } catch (e) {
        console.log(e);
        action?.resolve(false);
    }
}

export function* doLogin(action) {
    try {
        ////do login 
    } catch (e) {
        console.log(e);
        action?.resolve(false);
    }
}


export default function* watchAuthSagas() {
    yield takeLatest(authTypes.REGISTER, doRegister);
    yield takeLatest(authTypes.LOGIN, doLogin);
}
