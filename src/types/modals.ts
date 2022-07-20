// State модальных окон

export interface ModalsInitialState {
  responseModal: NotificationModal
  deleteAlertModal: DialogModal

}

interface NotificationModal {
  isActive: boolean
  srcIcon: string
  message: string
}

interface DialogModal {
  isOpen: boolean
  deleteFunc: (() => void) | ((id: string) => void) | null
  id: string
}

// Экшены

export const enum ModalsActions {
  SET_RESPONSE_MODAL_OPEN_SUCCESS = "SET_RESPONSE_MODAL_OPEN_SUCCESS",
  SET_RESPONSE_MODAL_OPEN_FAIL = "SET_RESPONSE_MODAL_OPEN_FAIL",
  SET_RESPONSE_MODAL_CLOSE = "SET_RESPONSE_MODAL_CLOSE",
  SET_OPEN_DIALOG_MODAL = "SET_OPEN_DIALOG_MODAL",
  SET_CLOSE_DIALOG_MODAL = "SET_CLOSE_DIALOG_MODAL",
}

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

interface OpenDialogModal {
  type: ModalsActions.SET_OPEN_DIALOG_MODAL
  payload: { func: (() => void) | ((id: string) => void), id: string }
}

interface CloseDialogModal {
  type: ModalsActions.SET_CLOSE_DIALOG_MODAL
}

// Экспорт всех экшенов

export type ModalsAction =
    OpenResponseModalSuccess |
    CloseResponseModal |
    OpenResponseModalFail |
    OpenDialogModal |
    CloseDialogModal