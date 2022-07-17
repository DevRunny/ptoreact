import {ModalsAction, ModalsActions} from "../../types/modals"

export const openResponseModalSuccess = (message: string) => {
  return {type: ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS, payload: message}
}

export const openResponseModalFail = (message: string) => {
  return {type: ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL, payload: message}
}

export const closeResponseModal = (): ModalsAction => {
  return {type: ModalsActions.SET_RESPONSE_MODAL_CLOSE}
}

export const openDialogModal = (deleteFunc: (() => void) | ((id: string) => void), id: string): ModalsAction => {
  return {type: ModalsActions.SET_OPEN_DIALOG_MODAL, payload: {func: deleteFunc, id}}
}

export const closeDialogModal = (): ModalsAction => {
  return {type: ModalsActions.SET_CLOSE_DIALOG_MODAL}
}