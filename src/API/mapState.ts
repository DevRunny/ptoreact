import axios from "axios";
import {MapStateZoom} from "../types/mapState";

export const getMapState = async (): Promise<any> => {
  const response = await axios.get("http://localhost:5000/mapState/getMapState")
  return response.data
};

export const editMapStateCenter = async (centerX: number, centerY: number): Promise<any> => {
  const mapStateModel = {
    centerX: centerX,
    centerY: centerY
  }
  const response = await axios.post("http://localhost:5000/mapState/editMapStateCenter", {...mapStateModel})
  return response.data
};

export const editMapStateZoom = async (zoom: MapStateZoom): Promise<any> => {
  console.log(zoom)
  const response = await axios.post("http://localhost:5000/mapState/editMapStateZoom", zoom)
  return response.data
}
