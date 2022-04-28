import {instance} from "./index";
import {Category} from "../types/accreditation";

export const getAccreditation = async (): Promise<Category[]> => {
  const response = await instance.get("accreditation")
  return response.data
}