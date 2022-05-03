import {Dispatch} from "redux";
import {MessengersAction, MessengersActions} from "../../types/messengers";
import {getMessengers} from "../../API/messengers";

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