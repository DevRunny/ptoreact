import {ContactsResponse} from "../types/contacts";
import {instance} from "./index";

export const getContacts = async (): Promise<ContactsResponse> => {
  const response = await instance.get("contacts.json")
  return response.data
}

export const updatePhones = async (value: string, id: string): Promise<any> => {
  return await instance.patch(`contacts/phones/${Number(id) - 1}.json`, {phoneNumber: value})
}

export const updateEmails = async (value: string, id: string): Promise<any> => {
  return await instance.patch(`contacts/emails/${Number(id) - 1}.json`, {email: value})
}

export const createPhone = async (id: string): Promise<any> => {
  return await instance.post(`contacts/phones.json`, {phoneNumber: "", id})
}

export const createEmail = async (id: string): Promise<any> => {
  return await instance.post(`contacts/emails.json`, {email: "", id})
}