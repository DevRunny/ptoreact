import {Dispatch} from "redux";
import {ContactsAction, ContactsActions} from "../../types/contacts";
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