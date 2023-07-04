import axios from "axios";
import {MapStateCenter, MapStateZoom} from "../types/mapState";

export const getMapState = async (): Promise<any> => {
  const response = await axios.get("http://localhost:5000/mapState/getMapState")
  return response.data
};

export const editMapStateCenter = async (center: MapStateCenter): Promise<any> => {
  const response = await axios.get("http://localhost:5000/mapState/editMapStateCenter")
  return response.data
};

export const editMapStateZoom = async(zoom: MapStateZoom): Promise<any> => {
  const response = await axios.get("http://localhost:5000/mapState/editMapStateZoom")
  return response.data
}
