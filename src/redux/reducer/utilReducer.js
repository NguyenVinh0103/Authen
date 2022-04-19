import {UtilTypes} from '../action';

const initialState = {
  language: 'vn',
  theme: 'light',
  isChangeTheme: false,
  demoActionState: -1,
  demoCallApi: [],
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case UtilTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case UtilTypes.CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case UtilTypes.IS_CHANGE_THEME:
      return {
        ...state,
        isChangeTheme: action.payload,
      };
    case UtilTypes.DEMO_ACTION_SUCCESS:
      return {
        ...state,
        demoActionState: action.payload,
      };
    case UtilTypes.DEMO_CALL_API_SUCCESS:
      return {
        ...state,
        demoCallApi: action.payload,
      };
    default:
      return state;
  }
}
