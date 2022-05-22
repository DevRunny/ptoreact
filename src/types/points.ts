export enum PointsActions {
  FETCH_POINTS = "FETCH_POINTS",
  FETCH_POINTS_SUCCESS = "FETCH_POINTS_SUCCESS",
  FETCH_POINTS_ERROR = "FETCH_POINTS_ERROR",
  ADD_POINT = "ADD_POINT"
}

export type PointsState = {
  points: Point[]
  error: string,
  loading: boolean
}

export type ResponsePoints = Point[]

export type Point = {
  id: string,
  address: string,
  workingMode: string,
  coordinate: number[]
}

export type PointsAction = FetchPoints | FetchPointsSuccess | FetchPointsError | AddPoint

type FetchPoints = {
  type: PointsActions.FETCH_POINTS
}

type FetchPointsSuccess = {
  type: PointsActions.FETCH_POINTS_SUCCESS,
  payload: Point[]
}

type FetchPointsError = {
  type: PointsActions.FETCH_POINTS_ERROR,
  payload: string
}

type AddPoint = {
  type: PointsActions.ADD_POINT,
  payload: Point
}