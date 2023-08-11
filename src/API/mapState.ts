import axios from "axios";
import {MapStateCenterPromise, MapStateResponse, MapStateZoom, MapStateZoomPromise} from "../types/mapState";

export const getMapState = async (): Promise<MapStateResponse> => {
  const response = await axios.get("http://localhost:5000/mapState/getMapState")
  return response.data
};

export const editMapStateCenter = async (centerX: number, centerY: number): Promise<MapStateCenterPromise> => {
  return await axios.post("http://localhost:5000/mapState/editMapStateCenter", {
    centerX: centerX,
    centerY: centerY
  })
};

export const editMapStateZoom = async (zoom: MapStateZoom): Promise<MapStateZoomPromise> => {
  return await axios.post("http://localhost:5000/mapState/editMapStateZoom", zoom)
}
