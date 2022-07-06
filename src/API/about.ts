import {instance} from "./index";
import {PayloadFetchAboutSuccess} from "../types/about";

export const getAbout = async (): Promise<PayloadFetchAboutSuccess> => {
  const response = await instance.get("about.json")
  return response.data
}

export const updateAbout = async (value: string | number, requisitesName?: string): Promise<any> => {
  if (typeof value === "string") {
    return await instance.patch("about.json", {nameCompany: value})
  } else {
    return await instance.patch("about/requisites.json", {[requisitesName || ""]: value})
  }
}