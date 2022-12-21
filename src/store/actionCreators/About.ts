import {Dispatch} from "redux";
import {AboutAction, AboutActions} from "../../types/about";
import {editInn, editNameCompany, editNumRegistry, editOgrn, getAbout} from "../../API/about";
import {ModalsAction, ModalsActions} from "../../types/modals";

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
      const responseNameCompany = await editNameCompany(inputValue)
      if (responseNameCompany.status === 201) {
        dispatch(setNameCompany(inputValue))
        dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS, payload: "Название компании успешно изменено"})
      }
    } catch (error) {
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL, payload: "Произошла ошибка при изменении"})
    }
  }
}

export const changeNumRegistry = (inputValue: string) => {
  return async (dispatch: Dispatch<AboutAction | ModalsAction>) => {
    const responseNumRegistry = await editNumRegistry(inputValue)
    if (responseNumRegistry.status === 201) {
      dispatch(setNumRegistry(inputValue))
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS, payload: "Номер реестра успешно изменен"})
    } else {
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL, payload: "Произошла ошибка при изменении"})
    }
  }
}

export const changeInn = (inputValue: string) => {
  return async (dispatch: Dispatch<AboutAction | ModalsAction>) => {
    const responseInn = await editInn(inputValue)
    if (responseInn.status === 201) {
      dispatch(setInn(inputValue))
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS, payload: "ИНН успешно изменен"})
    } else {
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL, payload: "Произошла ошибка при изменении"})
    }
  }
}

export const changeOgrn = (inputValue: string) => {
  return async (dispatch: Dispatch<AboutAction | ModalsAction>) => {
    const responseOgrn = await editOgrn(inputValue)
    if (responseOgrn.status === 201) {
      dispatch(setOgrn(inputValue))
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS, payload: "ОГРН успешно изменен"})
    } else {
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL, payload: "Произошла ошибка при изменении"})
    }
  }
}

export const setNameCompany = (nameCompany: string): AboutAction => {
  return {type: AboutActions.SET_NAME_COMPANY, payload: nameCompany}
}
export const setNumRegistry = (numRegistry: string): AboutAction => {
  return {type: AboutActions.SET_NUM_REGISTRY, payload: numRegistry}
}

export const setInn = (inn: string): AboutAction => {
  return {type: AboutActions.SET_INN, payload: inn}
}

export const setOgrn = (ogrn: string): AboutAction => {
  return {type: AboutActions.SET_OGRN, payload: ogrn}
}

