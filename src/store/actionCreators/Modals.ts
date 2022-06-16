import { ModalsActions, ModalsAction } from "../../types/modals"

export const OpenResponseModalSuccess = (message: string) => {
  return {type: ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS, payload: message}
}

export const OpenResponseModalFail = (message: string) => {
  return {type: ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL, payload: message}
}

export const closeResponseModal = (): ModalsAction => {
  return {type: ModalsActions.SET_RESPONSE_MODAL_CLOSE}
}