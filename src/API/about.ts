import {instance} from "./index";
import {PayloadFetchAboutSuccess} from "../types/about";

export const getAbout = async (): Promise<PayloadFetchAboutSuccess> => {
  const response = await instance.get("about")
  const data = response.data[0]
  return data
}