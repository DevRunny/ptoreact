import {AccreditationAction, AccreditationActions, AccreditationState, Category} from "../../types/accreditation";

const initialState: AccreditationState = {
  allCategories: [] as Category[],
  selectedCategories: [] as Category[],
  loading: false,
  error: null
}

export const accreditationReducer = (state = initialState,
                                     action: AccreditationAction): AccreditationState => {
  switch (action.type) {
    case AccreditationActions.GET_ALL_CATEGORIES:
      return {...state, loading: false, allCategories: action.payload}
    case AccreditationActions.GET_SELECTED_CATEGORIES:
      return {...state, loading: false, selectedCategories: action.payload}
    case AccreditationActions.SELECT_CATEGORY:
      return {...state, selectedCategories: [...state.selectedCategories, action.payload]}
    case AccreditationActions.UNSELECT_CATEGORY:
      return {...state, selectedCategories: state.selectedCategories.filter(cat => cat.id !== action.payload.id)}
    case AccreditationActions.FETCH_CATEGORIES:
      return {...state, loading: true, error: null}
    case AccreditationActions.FETCH_ACCREDITATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        selectedCategories: action.payload
      }
    case AccreditationActions.FETCH_ACCREDITATION_ERROR:
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}