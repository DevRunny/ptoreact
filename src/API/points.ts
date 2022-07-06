import {instance} from "./index";
import {Point, ResponsePoints} from "../types/points";

export const getPoints = async (): Promise<ResponsePoints> => {
  const response = await instance.get("points.json")
  return response.data
}

export const addNewPoint = async (newPoint: Point): Promise<any> => {
  return await instance.patch(`points/${Number(newPoint.id) - 1}.json`, newPoint)
}

export const deletePoints = async (newPoints: Point[]): Promise<any> => {
  return await instance.put(`points.json`, newPoints)
}

export const updatePointAddress = async (address: string, id: number): Promise<any> => {
  return await instance.patch(`points/${id - 1}.json`, {address})
}

export const updatePointCoordinate = async (coordinate: number[], id: number): Promise<any> => {
  return await instance.patch(`points/${id - 1}.json`, {coordinate})
}

export const updatePointWorkingMode = async (workingMode: string, id: number): Promise<any> => {
  return await instance.patch(`points/${id - 1}.json`, {workingMode})
}