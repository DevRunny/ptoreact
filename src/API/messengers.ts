import {ResponseFetchMessengers} from "../types/messengers";
import axios from "axios";

export const getMessengers = async (): Promise<ResponseFetchMessengers> => {
  const response = await axios.get("https://626bc4d4e5274e6664d152dd.mockapi.io/messengers")
  return response.data[0]
}