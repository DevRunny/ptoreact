import { User } from "../types/auth";
import axios from "axios";

export const getUser = async(): Promise<User> => {
	const response = await axios.get("https://6239d76d28bcd99f0275d5f1.mockapi.io/user")
	return response.data[0]
}