export const enum ModalsActions {
  SET_RESPONSE_MODAL_OPEN_SUCCESS = "SET_RESPONSE_MODAL_OPEN_SUCCESS",
  SET_RESPONSE_MODAL_OPEN_FAIL = "SET_RESPONSE_MODAL_OPEN_FAIL",
  SET_RESPONSE_MODAL_CLOSE = "SET_RESPONSE_MODAL_CLOSE",
}

export interface ModalsInitialState {
    responseModal: Modal
    deleteAlertModal: Modal
}

interface Modal {
  isActive: boolean
  srcIcon: string
  message: string
}

export type ModalsAction = OpenResponseModalSuccess | CloseResponseModal | OpenResponseModalFail

interface OpenResponseModalSuccess {
  type: ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS
  payload: string
}

interface OpenResponseModalFail {
  type: ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL
  payload: string
}

interface CloseResponseModal {
  type: ModalsActions.SET_RESPONSE_MODAL_CLOSE
}