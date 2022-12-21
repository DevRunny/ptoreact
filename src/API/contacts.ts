import {ContactsResponse} from "../types/contacts";
import {instance} from "./index";
import axios from "axios";

export const getAllEmails = async (): Promise<any> => {
  const response = await axios.get("http://localhost:5000/contacts/getAllEmails")
  return response.data
}

export const getAllPhones = async (): Promise<any> => {
  const response = await axios.get("http://localhost:5000/contacts/getAllPhones")
  return response.data
}

export const createPhone = async (): Promise<any> => {
  return await axios.post(`http://localhost:5000/contacts/createPhone`, {phoneNumber: ""})
}

export const editPhone = async (value: string, id: string): Promise<any> => {
  return await axios.post(`http://localhost:5000/contacts/editPhone`, {value, id: Number(id)})
}

export const deletePhone = async (id: string): Promise<any> => {
  return await axios.delete(`http://localhost:5000/contacts/deletePhone`, {
    data: {id: Number(id)}
  })
}

export const createEmail = async (): Promise<any> => {
  return await axios.post(`http://localhost:5000/contacts/createEmail`, {email: ""})
}

export const editEmail = async (value: string, id: string): Promise<any> => {
  return await axios.post(`http://localhost:5000/contacts/editEmail`, {value, id: Number(id)})
}

export const deleteEmail = async (id: string): Promise<any> => {
  return await axios.delete(`http://localhost:5000/contacts/deleteEmail`, {
    data: {id: Number(id)}
  })
}