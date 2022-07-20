// State области аккредитации

export interface AccreditationState {
  allCategories: Category[]
  selectedCategories: Category[]
  loading: boolean
  error: string | null
}

// State и Response от API

export type Category = {
  urlImage: string
  categoryName: string,
  categoryDescription: string,
  id: string
}

// Экшены

export enum AccreditationActions {
  GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES",
  GET_SELECTED_CATEGORIES = "GET_SELECTED_CATEGORIES",
  FETCH_CATEGORIES = "FETCH_CATEGORIES",
  FETCH_ACCREDITATION_SUCCESS = "FETCH_ACCREDITATION_SUCCESS",
  FETCH_ACCREDITATION_ERROR = "FETCH_ACCREDITATION_ERROR",
  SELECT_CATEGORY = "SELECT_CATEGORY",
  UNSELECT_CATEGORY = "UNSELECT_CATEGORY"
}

interface GetAllCategories {
  type: AccreditationActions.GET_ALL_CATEGORIES,
  payload: Category[]
}

interface GetSelectedCategories {
  type: AccreditationActions.GET_SELECTED_CATEGORIES,
  payload: Category[]
}

interface FetchCategories {
  type: AccreditationActions.FETCH_CATEGORIES
}

interface FetchAccreditationSuccess {
  type: AccreditationActions.FETCH_ACCREDITATION_SUCCESS
  payload: Category[]
}

interface FetchAccreditationError {
  type: AccreditationActions.FETCH_ACCREDITATION_ERROR
  payload: string
}

interface SelectCategory {
  type: AccreditationActions.SELECT_CATEGORY,
  payload: Category
}

interface UnselectCategory {
  type: AccreditationActions.UNSELECT_CATEGORY,
  payload: Category
}

// Экспорт всех экшенов

export type AccreditationAction =
    FetchCategories |
    FetchAccreditationSuccess |
    FetchAccreditationError |
    GetAllCategories |
    GetSelectedCategories |
    SelectCategory |
    UnselectCategory