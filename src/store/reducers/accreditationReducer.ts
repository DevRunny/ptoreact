import {AccreditationAction, AccreditationActions, AccreditationState, Category} from "../../types/accreditation";

const initialState: AccreditationState = {
  categories: [
    {
      categoryName: "",
      categoryDescription: "",
      urlImage: "",
      id: null
    }
  ] as Category[],
  loading: false,
  error: null
}

export const accreditationReducer = (state = initialState,
                                     action: AccreditationAction): AccreditationState => {
  switch (action.type) {
    case AccreditationActions.GET_ALL_CATEGORIES:
      return {...state, loading: false, categories: action.payload}
    case AccreditationActions.SELECT_CATEGORY:
      const categoriesForSelect: Category[] = state.categories.map((category: Category) => {
        if (category.id === action.payload) {
          return {...category, selected: true}
        }
        return category;
      })
      return {...state, categories: categoriesForSelect}
    case AccreditationActions.UNSELECT_CATEGORY:
      const categoriesForUnselect: Category[] = state.categories.map((category: Category) => {
        if (category.id === action.payload) {
          return {...category, selected: false}
        }
        return category;
      })
      return {...state, categories: categoriesForUnselect}
    case AccreditationActions.FETCH_CATEGORIES:
      return {...state, loading: true, error: null}
    case AccreditationActions.FETCH_ACCREDITATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null
      }
    case AccreditationActions.FETCH_ACCREDITATION_ERROR:
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}