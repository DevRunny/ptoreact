import {Dispatch} from "redux";
import {Point, PointsAction, PointsActions} from "../../types/points";
import {addNewPoint, deletePoints, getPoints} from "../../API/points";
import {ModalsAction, ModalsActions} from "../../types/modals";

export const fetchPointsAC = () => async (dispatch: Dispatch<PointsAction>) => {
  try {
    dispatch({type: PointsActions.FETCH_POINTS})
    const response = await getPoints()
    dispatch({type: PointsActions.FETCH_POINTS_SUCCESS, payload: response})
  } catch (error) {
    dispatch({type: PointsActions.FETCH_POINTS_ERROR, payload: error.message})
  }
}

export const addPoint = (newPoint: Point, points: Point[]) => {
  return async (dispatch: Dispatch<PointsAction | ModalsAction>) => {
    const response = await addNewPoint(newPoint)
    if (response.status === 200) {
      dispatch({
        type: PointsActions.ADD_POINT,
        payload: newPoint
      })
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS, payload: "Новый адрес был успешно добавлен"})
    } else {
      dispatch({
        type: ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL,
        payload: "Произошла ошибка при добавлении нового адреса"
      })
    }
  }
}

export const deleteCheckedPoints = (points: Point[], checkedPoints: Point[]) => {
  return async (dispatch: Dispatch<PointsAction | ModalsAction>) => {
    const response = await deletePoints(points)
    if (response.status === 200) {
      dispatch({
        type: PointsActions.DELETE_POINT,
        payload: points,
      })
      dispatch({
        type: PointsActions.DELETE_CHECK_POINT,
        payload: checkedPoints
      })
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS, payload: "Выбранные адреса были успешно удалены"})
    } else {
      dispatch({
        type: ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL,
        payload: "Произошла ошибка при удалении выбранных адресов"
      })
    }
  }
}

export const addCheckPoint = (point: Point) => {
  return {
    type: PointsActions.CHECK_POINT,
    payload: point
  }
}

export const setAddress = (addresses: Point[]) => {
  return {
    type: PointsActions.SET_ADDRESS,
    payload: addresses
  }
}