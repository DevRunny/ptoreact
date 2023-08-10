import axios from "axios";
import {MapStateZoom} from "../types/mapState";

export const getMapState = async (): Promise<any> => {
  const response = await axios.get("http://localhost:5000/mapState/getMapState")
  return response.data
};

export const editMapStateCenter = async (centerX: number, centerY: number): Promise<any> => {
  const response = await axios.post("http://localhost:5000/mapState/editMapStateCenter", {centerX: centerX, centerY: centerY})
  return response.data
};

export const editMapStateZoom = async (zoom: MapStateZoom): Promise<any> => {
  const response = await axios.post("http://localhost:5000/mapState/editMapStateZoom", zoom)
  return response.data
}
