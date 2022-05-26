import {instance} from "./index";
import {ResponseDocuments} from "../types/documents";

export const getDocumentation = async (): Promise<ResponseDocuments> => {
  const response = await instance.get("documentation")
  return response.data
}