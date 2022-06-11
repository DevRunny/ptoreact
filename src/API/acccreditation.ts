import {instance} from "./index";
import {Category} from "../types/accreditation";
import axios from "axios";

export const getAccreditation = async (): Promise<Category[]> => {
  const response = await instance.get("accreditation")
  return response.data
}

export const getAllCategoriesAccreditationFb = async (): Promise<any> => {
  const response = await axios.get("https://pto-react-default-rtdb.firebaseio.com/accreditation/allCategory")
  return response.data
}