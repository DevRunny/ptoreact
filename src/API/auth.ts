import {User} from "../types/auth";
import axios from "axios";
import {environment} from "../environment";


export const fbAuthUser = async (user: User): Promise<any> => {
  return await axios.post('http://localhost:5000/auth/login',
      {
        email: user.login,
        password: user.password,
      })
}

export const fbGetEmail = async (token: string): Promise<any> => {
  return await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${environment.apiKey}`, {idToken: token})
}

export const fbChangeEmailUser = async (token: string, email: string): Promise<any> => {
  return await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${environment.apiKey}`, {
    idToken: token,
    email: email,
    returnSecureToken: true
  })
}