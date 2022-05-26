import {Dispatch} from "redux";
import {ContactsAction, ContactsActions, Email, Phone} from "../../types/contacts";
import {getContacts} from "../../API/contacts";

export const fetchContactsAC = () => {
  return async (dispatch: Dispatch<ContactsAction>) => {
    try {
      dispatch({type: ContactsActions.FETCH_CONTACTS})
      const response = await getContacts()
      dispatch({type: ContactsActions.FETCH_CONTACTS_SUCCESS, payload: response})
    } catch (error) {
      dispatch({type: ContactsActions.FETCH_CONTACTS_ERROR, payload: error.message})
    }
  }
}

export const setPhones = (phones: Phone[]) => {
  return {type: ContactsActions.SET_PHONES, payload: phones}
}

export const setEmails = (emails: Email[]) => {
  return {type: ContactsActions.SET_EMAILS, payload: emails}
}

export const addPhone = () => {
  return {type: ContactsActions.ADD_PHONE}
}

export const addEmail = () => {
  return {type: ContactsActions.ADD_EMAIL}
}

export const deletePhone = (phones: Phone[]) => {
  return {type: ContactsActions.DELETE_PHONE, payload: phones}
}

export const deleteEmail = (emails: Email[]) => {
  return {type: ContactsActions.DELETE_EMAIL, payload: emails}
}

export const setMapStateCenter = (center: number[]) => {
  return {type: ContactsActions.SET_MAP_STATE_CENTER, payload: center}
}

export const setMapZoom = (zoom: number) => {
  return {type: ContactsActions.SET_MAP_ZOOM, payload: zoom}
}