import {ContactsResponse} from "../types/contacts";
import {instance} from "./index";

export const getContacts = async (): Promise<ContactsResponse> => {
  const response = await instance.get("contacts")
  return response.data[0]
}

