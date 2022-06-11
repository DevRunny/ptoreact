import {User} from "../types/auth";
import axios from "axios";
import {environment} from "../environment";

export const getUser = async (): Promise<User> => {
  const response = await axios.get("https://6239d76d28bcd99f0275d5f1.mockapi.io/user")
  return response.data[0]
}

export const fbAuthUser = async (user: User): Promise<any> => {
  const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
      {
          email: user.login,
          password: user.password,
          returnSecureToken: true
      })
  return response
}

export const changeAdminAccount = async(login: string, password: string): Promise<any> => {
    const response = await axios.put("https://6239d76d28bcd99f0275d5f1.mockapi.io/user/1", {
      login,
      password
  })
  return response.data
}