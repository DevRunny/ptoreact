import {Dispatch} from "redux";
import {AccreditationAction, AccreditationActions, Category} from "../../types/accreditation";
import {getAllCategoriesAccreditation, getSelectedCategories} from "../../API/acccreditation";

export const fetchAllCategoriesAC = () => {
  return async (dispatch: Dispatch<AccreditationAction>) => {
    try {
      dispatch({type: AccreditationActions.FETCH_CATEGORIES})
      const response = await getAllCategoriesAccreditation()
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
      const response = await getAllCategoriesAccreditation();
      dispatch({type: AccreditationActions.GET_ALL_CATEGORIES, payload: response})
    } catch (error) {
      dispatch({type: AccreditationActions.FETCH_ACCREDITATION_ERROR, payload: error.message})
    }
  }
}

export const selectCategory = (categoryId: number | null) => {
  return {type: AccreditationActions.SELECT_CATEGORY, payload: categoryId}
}

export const unselectCategory = (categoryId: number | null) => {
  return {type: AccreditationActions.UNSELECT_CATEGORY, payload: categoryId}
}