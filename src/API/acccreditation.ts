import {Category} from "../types/accreditation";
import {instance} from "./index";


export const getAllCategoriesAccreditationFb = async (): Promise<Category[]> => {
  const response = await instance.get("accreditation/allCategories.json")
  return response.data
}

export const getSelectedCategories = async (): Promise<Category[]> => {
  const response = await instance.get("accreditation/selectedCategories.json")
  return response.data
}

export const addSelectCategory = async (category: Category[]) => {
  return await instance.put("accreditation/selectedCategories.json", category)
}