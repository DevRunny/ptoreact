export enum AccreditationActions {
  FETCH_ACCREDITATION = "FETCH_ACCREDITATION",
  FETCH_ACCREDITATION_SUCCESS = "FETCH_ACCREDITATION_SUCCESS",
  FETCH_ACCREDITATION_ERROR = "FETCH_ACCREDITATION_ERROR"
}

export interface AccreditationState {
  categories: Category[]
  loading: boolean
  error: string | null
}

export type Category = {
  urlImage: string
  categoryName: string,
  categoryDescription: string,
  id: string
}

export type AccreditationAction = FetchAccreditation | FetchAccreditationSuccess | FetchAccreditationError

interface FetchAccreditation {
  type: AccreditationActions.FETCH_ACCREDITATION
}

interface FetchAccreditationSuccess {
  type: AccreditationActions.FETCH_ACCREDITATION_SUCCESS
  payload: Category[]
}


interface FetchAccreditationError {
  type: AccreditationActions.FETCH_ACCREDITATION_ERROR
  payload: string
}