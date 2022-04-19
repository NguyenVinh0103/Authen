import { authTypes } from "../action";

const initialState = {
    profile: {},
    accessToken: '',
    abc: false,
    xyz: -1,
    
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case authTypes.REGISTER_SUCCESS:
            return {
                ...state,
                profile: action.payload,
            };
        case authTypes.LOGIN_SUCCESS:
            return {
                ...state,
                accessToken: action.payload,
            };
        default:
            return state;
    }
}
