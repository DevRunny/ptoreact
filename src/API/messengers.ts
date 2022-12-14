import {ResponseFetchMessengers} from "../types/messengers";
import {instance} from "./index";
import axios from "axios";

export const getMessengers = async (): Promise<ResponseFetchMessengers> => {
  const response = await instance.get("messengers.json")
  // const response = await axios.get('http://localhost:5000/messengers/getAllmessengers', {
  //   headers: {
  //     'Authorization': `Bearer ${token}`
  //   }
  // });
  return response.data;
}

export const changeValueMessenger = async (id: string, value: string) => {
  return await instance.patch(`messengers/${Number(id) - 1}.json`, {value});
}