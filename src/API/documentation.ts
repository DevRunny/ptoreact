import {instance} from "./index";
import {Document} from "../types/documents";

export const getDocumentation = async ():Promise<Document[]> => {
    const response = await instance.get("documentation")
    const data = response.data
    return data
}