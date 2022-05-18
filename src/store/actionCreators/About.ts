import {Dispatch} from "redux";
import {AboutAction, AboutActions} from "../../types/about";
import {getAbout} from "../../API/about";

export const fetchAboutAC = () => {
  return async (dispatch: Dispatch<AboutAction>) => {
    try {
      dispatch({type: AboutActions.FETCH_ABOUT})
      const response = await getAbout()
      dispatch({type: AboutActions.FETCH_ABOUT_SUCCESS, payload: response})
    } catch (error) {
      dispatch({type: AboutActions.FETCH_ABOUT_ERROR, payload: error.message})
    }
  }
}

export const setNameCompany = (nameCompany: string) => {
  return {type: AboutActions.SET_NAME_COMPANY, payload: nameCompany}
}
export const setNumRegistry = (numRegistry: number) => {
  return {type: AboutActions.SET_NUM_REGISTRY, payload: numRegistry}
}

export const setInn = (inn: number) => {
  return {type: AboutActions.SET_INN, payload: inn}
}

export const setOgrn = (ogrn: number) => {
  return {type: AboutActions.SET_OGRN, payload: ogrn}
}

