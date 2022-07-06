import {Dispatch} from "redux";
import {Point, PointsAction, PointsActions} from "../../types/points";
import {
  addNewPoint,
  deletePoints,
  getPoints,
  updatePointAddress,
  updatePointCoordinate,
  updatePointWorkingMode
} from "../../API/points";
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
    const response = points.length < 3 ? await addNewPoint(newPoint) : ""
    if (response.status === 200) {
      dispatch({
        type: PointsActions.ADD_POINT,
        payload: newPoint
      })
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS, payload: "Новый адрес был успешно добавлен"})
    } else if (points.length === 3) {
      dispatch({
        type: ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL,
        payload: "Превышен лимит адресов"
      })
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

export const addSelectedCheckPoint = (point: Point) => {
  return {
    type: PointsActions.CHECK_POINT,
    payload: point
  }
}

export const deleteSelectedCheckPoint = (point: Point) => {
  return {
    type: PointsActions.UNCHECK_POINT,
    payload: point
  }
}

export const setAddress = (address: string, id: string) => {
  return async (dispatch: Dispatch<PointsAction | ModalsAction>) => {
    const response = await updatePointAddress(address, Number(id))
    if (response.status === 200) {
      dispatch({type: PointsActions.SET_ADDRESS, payload: {address, id}})
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS, payload: "Адрес успешно изменен"})
    } else {
      dispatch({
        type: ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL,
        payload: "Произошла ошибка при изменении адреса"
      })
    }
  }
}

export const setCoordinate = (coordinate: number[], id: string) => {
  return async (dispatch: Dispatch<PointsAction | ModalsAction>) => {
    const response = await updatePointCoordinate(coordinate, Number(id))
    if (response.status === 200) {
      dispatch({type: PointsActions.SET_COORDINATE, payload: {coordinate, id}})
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS, payload: "Кооринаты успешно изменены"})
    } else {
      dispatch({
        type: ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL,
        payload: "Произошла ошибка при изменении координат"
      })
    }
  }
}

export const setWorkingMode = (workingMode: string, id: string) => {
  return async (dispatch: Dispatch<PointsAction | ModalsAction>) => {
    const response = await updatePointWorkingMode(workingMode, Number(id))
    if (response.status === 200) {
      dispatch({type: PointsActions.SET_WORKING_MODE, payload: {workingMode, id}})
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS, payload: "Режим работы успешно изменен"})
    } else {
      dispatch({
        type: ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL,
        payload: "Произошла ошибка при изменении режима работы"
      })
    }
  }
}