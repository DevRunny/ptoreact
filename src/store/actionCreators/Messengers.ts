import {Dispatch} from "redux";
import {MessengersAction, MessengersActions} from "../../types/messengers";
import {changeValueMessenger, getMessengers} from "../../API/messengers";
import { ModalsAction, ModalsActions } from "../../types/modals";

export const fetchMessengersAC = () => {
  return async (dispatch: Dispatch<MessengersAction>) => {
    try {
      dispatch({type: MessengersActions.FETCH_MESSENGERS})
      const response = await getMessengers()
      dispatch({type: MessengersActions.FETCH_MESSENGERS_SUCCESS, payload: response})
    } catch (error) {
      dispatch({type: MessengersActions.FETCH_MESSENGERS_ERROR, payload: error.message})
    }
  }
}

export const deleteMessenger = (id: string) => {
  return {
    type: MessengersActions.DELETE_MESSENGER,
    payload: id
  }
}

export const setValueMessenger = (id: string, value: string) => {
  return async (dispatch: Dispatch<MessengersAction | ModalsAction>) => {
    try {
      const response = await changeValueMessenger(id, value)
      if (response.status === 200) {
        dispatch({type: MessengersActions.SET_MESSENGER, payload: {id, value}})
        dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS, payload: "Ссылка на мессенджер успешно изменена"})
      }
    } catch (error) {
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL, payload: "Произошла ошибка при изменении мессенджера"})
    }
  }
}