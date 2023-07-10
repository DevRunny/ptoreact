import {Dispatch} from "redux";
import {ContactsAction, ContactsActions, Email, IEmailsAndPhonesResponse, Phone} from "../../types/contacts";
import {
  createEmail,
  createPhone,
  deleteEmail,
  deletePhone,
  editEmail,
  editPhone,
  getAllEmails,
  getAllPhones,
} from "../../API/contacts";
import {ModalsAction, ModalsActions} from "../../types/modals";

export const fetchContactsAC = () => {
  return async (dispatch: Dispatch<ContactsAction>) => {
    try {
      dispatch({type: ContactsActions.FETCH})
      const response = await getEmailsAndPhones()
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
      const response = await editPhone(phone.phoneNumber, phone.id)
      if (response.status === 201) {
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
      const response = await editEmail(email.email, email.id)
      if (response.status === 201) {
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

export const addPhone = () => {
  return async (dispatch: Dispatch<ContactsAction>) => {
    try {
      dispatch({type: ContactsActions.FETCH})
      const axiosResponse = await createPhone()
      axiosResponse.data.id = axiosResponse.data.id.toString();
      const response = axiosResponse.data
      if (axiosResponse.status === 201) {
        dispatch({type: ContactsActions.FETCH_SUCCESS})
        dispatch({type: ContactsActions.ADD_PHONE, payload: response})
      }
    } catch (error) {
      dispatch({type: ContactsActions.FETCH_ERROR, payload: error})
    }
  }
}

export const addEmail = () => {
  return async (dispatch: Dispatch<ContactsAction>) => {
    try {
      dispatch({type: ContactsActions.FETCH})
      const axiosResponse = await createEmail()
      axiosResponse.data.id = axiosResponse.data.id.toString();
      const response = axiosResponse.data
      if (axiosResponse.status === 201) {
        dispatch({type: ContactsActions.FETCH_SUCCESS})
        dispatch({type: ContactsActions.ADD_EMAIL, payload: response})
      }
    } catch (error) {
      dispatch({type: ContactsActions.FETCH_ERROR, payload: error})
    }
  }
}

export const deletePhoneAC = (id: string) => {
  return async (dispatch: Dispatch<ContactsAction>) => {
    try {
      dispatch({type: ContactsActions.FETCH})
      const response = await deletePhone(id)
      if (response.status === 200) {
        dispatch({type: ContactsActions.DELETE_PHONE, payload: id})
        dispatch({type: ContactsActions.FETCH_SUCCESS})
      }
    } catch (error) {
      dispatch({type: ContactsActions.FETCH_ERROR, payload: error})
    }
  }
}

export const deleteEmailAC = (id: string) => {
  return async (dispatch: Dispatch<ContactsAction>) => {
    try {
      dispatch({type: ContactsActions.FETCH})
      const response = await deleteEmail(id)
      if (response.status === 200) {
        dispatch({type: ContactsActions.DELETE_EMAIL, payload: id})
        dispatch({type: ContactsActions.FETCH_SUCCESS})
      }
    } catch (error) {
      dispatch({type: ContactsActions.FETCH_ERROR, payload: error})
    }
  }
}

// export const setMapStateCenter = (center: number[]) => {
//   return {type: ContactsActions.SET_MAP_STATE_CENTER, payload: center}
// }
//
// export const setMapZoom = (zoom: number) => {
//   return {type: ContactsActions.SET_MAP_ZOOM, payload: zoom}
// }


const getEmailsAndPhones = async (): Promise<IEmailsAndPhonesResponse> => {
  const phones = await getAllPhones();
  const emails = await getAllEmails();

  phones.map((phone: Phone) => {
    return {...phone, id: phone.id.toString()}
  })

  emails.map((email: Email) => {
    return {...email, id: email.id.toString()}
  })

  const response: IEmailsAndPhonesResponse = {phones, emails};

  return response;
}