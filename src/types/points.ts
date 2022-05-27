export enum PointsActions {
  FETCH_POINTS = "FETCH_POINTS",
  FETCH_POINTS_SUCCESS = "FETCH_POINTS_SUCCESS",
  FETCH_POINTS_ERROR = "FETCH_POINTS_ERROR",
  ADD_POINT = "ADD_POINT",
  DELETE_POINT = "DELETE_POINT",
  CHECK_POINT = "CHECK_POINT",
  DELETE_CHECK_POINT = "DELETE_CHECK_POINT",
  SET_ADDRESS = "SET_ADDRESS"
}

export type PointsState = {
  points: Point[]
  checkedPoints: Point[]
  error: string
  loading: boolean
}

export type ResponsePoints = Point[]

export type Point = {
  id: string,
  address: string,
  workingMode: string,
  coordinate: number[]
}

export type PointsAction =
    FetchPoints |
    FetchPointsSuccess |
    FetchPointsError |
    AddPoint |
    DeletePoint |
    CheckPoint |
    DeleteCheckPoint |
    SetAddress

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

type DeletePoint = {
  type: PointsActions.DELETE_POINT,
  payload: Point[]
}

type CheckPoint = {
  type: PointsActions.CHECK_POINT,
  payload: Point
}

type DeleteCheckPoint = {
  type: PointsActions.DELETE_CHECK_POINT,
  payload: Point[]
}

type SetAddress = {
  type: PointsActions.SET_ADDRESS
  payload: Point[]
}