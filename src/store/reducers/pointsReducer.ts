import {Point, PointsAction, PointsActions, PointsState} from "../../types/points";

const initialState: PointsState = {
  points: [] as Point[],
  checkedPoints: [] as Point[],
  error: "",
  loading: false
}

export const pointsReducer = (state = initialState, action: PointsAction): PointsState => {
  switch (action.type) {
    case PointsActions.FETCH_POINTS:
      return {...state, loading: true}
    case PointsActions.FETCH_POINTS_ERROR:
      return {...state, loading: false, error: action.payload}
    case PointsActions.FETCH_POINTS_SUCCESS:
      return {
        ...state,
        loading: false,
        points: action.payload
      }
    case PointsActions.ADD_POINT:
      return {...state, points: [...state.points, action.payload]}
    case PointsActions.DELETE_POINT:
      return {...state, points: action.payload}
    case PointsActions.CHECK_POINT:
      return {...state, checkedPoints: [...state.checkedPoints, action.payload]}
    case PointsActions.DELETE_CHECK_POINT:
      return {...state, checkedPoints: action.payload}
    case PointsActions.SET_ADDRESS:
      return {...state, points: action.payload}
    default:
      return state
  }
}