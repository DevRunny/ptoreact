import {Dispatch} from "redux";
import {AccreditationAction, AccreditationActions, Category} from "../../types/accreditation";
import {getAllCategoriesAccreditationFb, getSelectedCategories} from "../../API/acccreditation";

export const fetchAllCategoriesAC = () => {
  return async (dispatch: Dispatch<AccreditationAction>) => {
    try {
      dispatch({type: AccreditationActions.FETCH_CATEGORIES})
      const response = await getAllCategoriesAccreditationFb()
      dispatch({type: AccreditationActions.GET_ALL_CATEGORIES, payload: response})
    } catch (error) {
      dispatch({type: AccreditationActions.FETCH_ACCREDITATION_ERROR, payload: error.message})
    }
  }
}

export const fetchSelectedCategoriesAC = () => {
  return async (dispatch: Dispatch<AccreditationAction>) => {
    try {
      dispatch({type: AccreditationActions.FETCH_CATEGORIES})
      const response = await getSelectedCategories()
      dispatch({type: AccreditationActions.GET_SELECTED_CATEGORIES, payload: response})
    } catch (error) {
      dispatch({type: AccreditationActions.FETCH_ACCREDITATION_ERROR, payload: error.message})
    }
  }
}

export const selectCategory = (category: Category) => {
  return {type: AccreditationActions.SELECT_CATEGORY, payload: category}
}

export const unselectCategory = (category: Category) => {
  return {type: AccreditationActions.UNSELECT_CATEGORY, payload: category}
}