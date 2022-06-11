import {ResponseFetchMessengers} from "../types/messengers";
import axios from "axios";

export const getMessengers = async (): Promise<ResponseFetchMessengers> => {
  const response = await axios.get("https://pto-react-default-rtdb.firebaseio.com/messengers.json")
  return response.data
}

export const changeValueMessenger = async (id: string, value: string) => {
  const response = await axios.patch(`https://pto-react-default-rtdb.firebaseio.com/messengers/${Number(id) - 1}.json`, {value})
  return response.data
}