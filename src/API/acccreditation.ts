import {instance} from "./index";
import {Category} from "../types/accreditation";
import axios from "axios";

export const getAccreditation = async (): Promise<Category[]> => {
  const response = await instance.get("accreditation")
  return response.data
}

export const getAllCategoriesAccreditationFb = async (): Promise<any> => {
  const response = await axios.get("https://pto-react-default-rtdb.firebaseio.com/accreditation/allCategories.json")
  console.log(response.data)
  return response.data
}

export const getSelectedCategories = async (): Promise<any> => {
  const response = await axios.get("https://pto-react-default-rtdb.firebaseio.com/accreditation/selectedCategories.json")
  return response.data
}

export const addSelectCategory = async (category: Category[]) => {
  const response = await axios.put("https://pto-react-default-rtdb.firebaseio.com/accreditation/selectedCategories.json", category)
  return response
}