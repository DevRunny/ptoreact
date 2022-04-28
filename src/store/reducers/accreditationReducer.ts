import {AccreditationAction, AccreditationActions, AccreditationState, Category} from "../../types/accreditation";

const initialState: AccreditationState = {
  categories: [] as Category[],
  loading: false,
  error: null
}

export const accreditationReducer = (state = initialState,
                                     action: AccreditationAction): AccreditationState => {
  switch (action.type) {
    case AccreditationActions.FETCH_ACCREDITATION:
      return {...state, loading: true, error: null}
    case AccreditationActions.FETCH_ACCREDITATION_SUCCESS:
      return {
        loading: false,
        error: null,
        categories: action.payload
      }
    case AccreditationActions.FETCH_ACCREDITATION_ERROR:
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}