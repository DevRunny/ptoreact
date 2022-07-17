import {ModalsAction, ModalsActions, ModalsInitialState} from "../../types/modals"

const initialState: ModalsInitialState = {
  responseModal: {
    isActive: false,
    message: "",
    srcIcon: ""
  },
  deleteAlertModal: {
    isOpen: false,
    deleteFunc: null,
    id: ""
  }
}

export const modalsReducer = (state = initialState, action: ModalsAction): ModalsInitialState => {
  switch (action.type) {
    case ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS:
      return {
        ...state, responseModal: {
          ...state.responseModal,
          isActive: true,
          message: action.payload,
          srcIcon: "/images/AdminPanel/successPopup.svg"
        }
      }
    case ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL:
      return {
        ...state, responseModal: {
          ...state.responseModal,
          isActive: true,
          message: action.payload,
          srcIcon: "/images/AdminPanel/failPopup.svg"
        }
      }
    case ModalsActions.SET_RESPONSE_MODAL_CLOSE:
      return {...state, responseModal: {...state.responseModal, isActive: false}}
    case ModalsActions.SET_OPEN_DIALOG_MODAL:
      return {
        ...state,
        deleteAlertModal: {
          ...state.deleteAlertModal,
          isOpen: true,
          deleteFunc: action.payload.func,
          id: action.payload.id
        }
      }
    case ModalsActions.SET_CLOSE_DIALOG_MODAL:
      return {...state, deleteAlertModal: {...state.deleteAlertModal, isOpen: false}}
    default:
      return state
  }
}