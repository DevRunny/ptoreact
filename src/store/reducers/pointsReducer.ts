import {Point, PointsAction, PointsActions, PointsState} from "../../types/points";

const initialState: PointsState = {
  points: [
    {
      address: "",
      coordinate: [0, 0],
      workingMode: "",
      id: ""
    }
  ] as Point[],
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
    case PointsActions.UNCHECK_POINT:
      return {...state, checkedPoints: state.checkedPoints.filter(point => point.id !== action.payload.id)}
    case PointsActions.DELETE_CHECK_POINT:
      return {...state, checkedPoints: action.payload}
    case PointsActions.SET_ADDRESS:
      return {
        ...state, points: [...state.points.map(point => {
          if (point.id === action.payload.id) {
            return {...point, address: action.payload.address}
          } else {
            return point
          }
        })]
      }
    case PointsActions.SET_COORDINATE:
      return {
        ...state, points: [...state.points.map(point => {
          if (point.id === action.payload.id) {
            return {...point, coordinate: action.payload.coordinate}
          } else {
            return point
          }
        })]
      }
    case PointsActions.SET_WORKING_MODE:
      return {
        ...state, points: [...state.points.map(point => {
          if (point.id === action.payload.id) {
            return {...point, workingMode: action.payload.workingMode}
          } else {
            return point
          }
        })]
      }
    default:
      return state
  }
}