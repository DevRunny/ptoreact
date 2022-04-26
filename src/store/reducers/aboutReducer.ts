import {AboutAction, AboutActions, AboutState} from "../../types/about";

const initialState: AboutState = {
  nameCompany: "",
  requisites: {
    numRegistry: 0,
    inn: 0,
    ogrn: 0
  },
  loading: false,
  error: null
}

export const aboutReducer = (state = initialState, action: AboutAction): AboutState => {
  switch (action.type) {
    case AboutActions.FETCH_ABOUT:
      return {...state, loading: true, error: null}
    case AboutActions.FETCH_ABOUT_SUCCESS:
      return {
        loading: false,
        error: null,
        nameCompany: action.payload.nameCompany,
        requisites: {
          ...state.requisites,
          inn: action.payload.requisites.inn,
          ogrn: action.payload.requisites.ogrn,
          numRegistry: action.payload.requisites.numRegistry
        }
      }
    case AboutActions.FETCH_ABOUT_ERROR:
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}