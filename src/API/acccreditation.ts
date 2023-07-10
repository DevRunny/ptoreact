import {Category} from "../types/accreditation";
import axios from "axios";


export const getAllCategoriesAccreditation = async (): Promise<Category[]> => {
  const response = await axios.get("http://localhost:5000/categories/getAllCategories")
  return response.data
}

export const getSelectedCategories = async (): Promise<Category[]> => {
  const response = await axios.get('http://localhost:5000/categories/getSelectedCategories')
  return response.data
}

export const selectCategories = async (ids: (number | null)[]) => {
  return await axios.post('http://localhost:5000/categories/selectCategories', {ids})
}