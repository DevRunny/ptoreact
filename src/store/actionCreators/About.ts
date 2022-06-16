import {Dispatch} from "redux";
import {AboutAction, AboutActions} from "../../types/about";
import {getAbout, updateAbout} from "../../API/about";
import { ModalsAction, ModalsActions } from "../../types/modals";

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

export const changeNameComany = (inputValue: string) => {
  return async (dispatch: Dispatch<AboutAction | ModalsAction>) => {
    try {
      const responseNameCompany = await updateAbout(inputValue)
      if (responseNameCompany.status === 200) {
        dispatch(setNameCompany(inputValue))
        dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS, payload: "Название компании успешно изменено"})
      }
    } catch (error) {
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL, payload: "Произошла ошибка при изменении"})
    }
  }
}

export const changeNumRegistry = (id: string, inputValue: string) => {
  return async (dispatch: Dispatch<AboutAction | ModalsAction>) => {
    const responseNumRegistry = await updateAbout(Number(inputValue), id)
    if (responseNumRegistry.status === 200) {
      dispatch(setNumRegistry(Number(inputValue)))
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS, payload: "Номер реестра успешно изменен"})
    } else {
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL, payload: "Произошла ошибка при изменении"})
    }
  }
}

export const changeInn = (id: string, inputValue: string) => {
  return async (dispatch: Dispatch<AboutAction | ModalsAction>) => {
    const responseInn = await updateAbout(Number(inputValue), id)
    if (responseInn.status === 200) {
      dispatch(setInn(Number(inputValue)))
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS, payload: "ИНН успешно изменен"})
    } else {
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL, payload: "Произошла ошибка при изменении"})
    }
  }
}

export const changeOgrn = (id: string, inputValue: string) => {
  return async (dispatch: Dispatch<AboutAction | ModalsAction>) => {
    const responseOgrn = await updateAbout(Number(inputValue), id)
    if (responseOgrn.status === 200) {
      dispatch(setOgrn(Number(inputValue)))
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS, payload: "ОГРН успешно изменен"})
    } else {
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL, payload: "Произошла ошибка при изменении"})
    }
  }
}

export const setNameCompany = (nameCompany: string): AboutAction => {
  return {type: AboutActions.SET_NAME_COMPANY, payload: nameCompany}
}
export const setNumRegistry = (numRegistry: number): AboutAction => {
  return {type: AboutActions.SET_NUM_REGISTRY, payload: numRegistry}
}

export const setInn = (inn: number): AboutAction => {
  return {type: AboutActions.SET_INN, payload: inn}
}

export const setOgrn = (ogrn: number): AboutAction => {
  return {type: AboutActions.SET_OGRN, payload: ogrn}
}

