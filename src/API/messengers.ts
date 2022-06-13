import {ResponseFetchMessengers} from "../types/messengers";
import {instance} from "./index";

export const getMessengers = async (): Promise<ResponseFetchMessengers> => {
  const response = await instance.get("messengers.json")
  return response.data
}

export const changeValueMessenger = async (id: string, value: string) => {
  const response = await instance.patch(`messengers/${Number(id) - 1}.json`, {value})
  return response.data
}