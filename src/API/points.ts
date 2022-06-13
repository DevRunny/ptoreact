import {instance} from "./index";
import {ResponsePoints} from "../types/points";

export const getPoints = async (): Promise<ResponsePoints> => {
  const response = await instance.get("points.json")
  return response.data
}