import {AboutAction, AboutActions, AboutState} from "../../types/about";

const initialState: AboutState = {
  nameCompany: "",
  requisites: {
    numRegistry: "",
    inn: "",
    ogrn: ""
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
          inn: action.payload.requisites.inn,
          ogrn: action.payload.requisites.ogrn,
          numRegistry: action.payload.requisites.numRegistry
        }
      }
    case AboutActions.FETCH_ABOUT_ERROR:
      return {...state, loading: false, error: action.payload}
    case AboutActions.SET_NAME_COMPANY:
      return {...state, nameCompany: action.payload}
    case AboutActions.SET_NUM_REGISTRY:
      return {...state, requisites: {...state.requisites, numRegistry: action.payload}}
    case AboutActions.SET_INN:
      return {...state, requisites: {...state.requisites, inn: action.payload}}
    case AboutActions.SET_OGRN:
      return {...state, requisites: {...state.requisites, ogrn: action.payload}}
    default:
      return state
  }
}