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