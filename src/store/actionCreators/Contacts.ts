import {Dispatch} from "redux";
import {ContactsAction, ContactsActions, Email, Phone} from "../../types/contacts";
import {
  createEmail,
  createPhone,
  DBdeleteEmail,
  DBdeletePhone,
  getContacts,
  updateEmails,
  updatePhones as DBupdatePhone
} from "../../API/contacts";
import {ModalsAction, ModalsActions} from "../../types/modals";

export const fetchContactsAC = () => {
  return async (dispatch: Dispatch<ContactsAction>) => {
    try {
      dispatch({type: ContactsActions.FETCH})
      const response = await getContacts()
      dispatch({type: ContactsActions.FETCH_CONTACTS_SUCCESS, payload: response})
    } catch (error) {
      dispatch({type: ContactsActions.FETCH_CONTACTS_ERROR, payload: error.message})
    }
  }
}

export const setPhoneContacts = (phone: Phone) => {
  return async (dispatch: Dispatch<ContactsAction | ModalsAction>) => {
    try {
      dispatch({type: ContactsActions.FETCH})
      const response = await DBupdatePhone(phone.phoneNumber, phone.id)
      if (response.status === 200) {
        dispatch({type: ContactsActions.FETCH_SUCCESS})
        dispatch({type: ContactsActions.SET_PHONE, payload: phone})
        dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS, payload: "Телефон был успешно изменен"})
      }
    } catch (error) {
      dispatch({type: ContactsActions.FETCH_ERROR, payload: error})
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL, payload: "Произошла ошибка при изменении телефона"})
    }
  }
}

export const setEmailContacts = (email: Email) => {
  return async (dispatch: Dispatch<ContactsAction | ModalsAction>) => {
    try {
      dispatch({type: ContactsActions.FETCH})
      const response = await updateEmails(email.email, email.id)
      if (response.status === 200) {
        dispatch({type: ContactsActions.FETCH_SUCCESS})
        dispatch({type: ContactsActions.SET_EMAIL, payload: email})
        dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS, payload: "Email был успешно изменен"})
      }
    } catch (error) {
      dispatch({type: ContactsActions.FETCH_ERROR, payload: error})
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL, payload: "Произошла ошибка при изменении email"})
    }
  }
}

export const addPhone = (id: string) => {
  return async (dispatch: Dispatch<ContactsAction>) => {
    try {
      dispatch({type: ContactsActions.FETCH})
      const response = await createPhone(id)
      if (response.status === 200) {
        dispatch({type: ContactsActions.FETCH_SUCCESS})
        dispatch({type: ContactsActions.ADD_PHONE})
      }
    } catch (error) {
      dispatch({type: ContactsActions.FETCH_ERROR, payload: error})
    }
  }
}

export const addEmail = (id: string) => {
  return async (dispatch: Dispatch<ContactsAction>) => {
    try {
      dispatch({type: ContactsActions.FETCH})
      const response = await createEmail(id)
      if (response.status === 200) {
        dispatch({type: ContactsActions.FETCH_SUCCESS})
        dispatch({type: ContactsActions.ADD_EMAIL})
      }
    } catch (error) {
      dispatch({type: ContactsActions.FETCH_ERROR, payload: error})
    }
  }
}

export const deletePhone = (id: string) => {
  return async (dispatch: Dispatch<ContactsAction>) => {
    try {
      dispatch({type: ContactsActions.FETCH})
      const response = await DBdeletePhone(id)
      if (response.status === 200) {
        dispatch({type: ContactsActions.DELETE_PHONE, payload: id})
        dispatch({type: ContactsActions.FETCH_SUCCESS})
      }
    } catch (error) {
      dispatch({type: ContactsActions.FETCH_ERROR, payload: error})
    }
  }
}

export const deleteEmail = (id: string) => {
  return async (dispatch: Dispatch<ContactsAction>) => {
    try {
      dispatch({type: ContactsActions.FETCH})
      const response = await DBdeleteEmail(id)
      if (response.status === 200) {
        dispatch({type: ContactsActions.DELETE_EMAIL, payload: id})
        dispatch({type: ContactsActions.FETCH_SUCCESS})
      }
    } catch (error) {
      dispatch({type: ContactsActions.FETCH_ERROR, payload: error})
    }
  }
}

export const setMapStateCenter = (center: number[]) => {
  return {type: ContactsActions.SET_MAP_STATE_CENTER, payload: center}
}

export const setMapZoom = (zoom: number) => {
  return {type: ContactsActions.SET_MAP_ZOOM, payload: zoom}
}