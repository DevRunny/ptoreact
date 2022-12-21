import {instance} from "./index";
import {PayloadFetchAboutSuccess} from "../types/about";
import axios from "axios";

export const getAbout = async (): Promise<PayloadFetchAboutSuccess> => {
  const response = await axios.get("http://localhost:5000/aboutCompany/getAllInfoAboutCompany")
  return response.data
}

export const editNameCompany = async (nameCompany: string): Promise<any> => {
  return await axios.post('http://localhost:5000/aboutCompany/editNameCompany', {nameCompany})
}

export const editInn = async (inn: string): Promise<any> => {
  return await axios.post('http://localhost:5000/aboutCompany/editInn', {inn})
}

export const editOgrn = async (ogrn: string): Promise<any> => {
  return await axios.post('http://localhost:5000/aboutCompany/editOgrn', {ogrn})
}

export const editNumRegistry = async (numRegistry: string): Promise<any> => {
  return await axios.post('http://localhost:5000/aboutCompany/editNumRegistry', {numRegistry})
}