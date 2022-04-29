import {Dispatch} from "redux";
import {AccreditationAction, AccreditationActions} from "../../types/accreditation";
import {getAccreditation} from "../../API/acccreditation";


export const fetchAccreditationAC = () => {
  return async (dispatch: Dispatch<AccreditationAction>) => {
    try {
      dispatch({type: AccreditationActions.FETCH_ACCREDITATION})
      const response = await getAccreditation()
      dispatch({type: AccreditationActions.FETCH_ACCREDITATION_SUCCESS, payload: response})
    } catch (error) {
      dispatch({type: AccreditationActions.FETCH_ACCREDITATION_ERROR, payload: error.message})
    }
  }
}