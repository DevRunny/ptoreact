import {instance} from "./index";
import {ResponsePoints} from "../types/points";

export const getPoints = async (): Promise<ResponsePoints> => {
  const response = await instance.get("https://626bc4d4e5274e6664d152dd.mockapi.io/points")
  return response.data
}