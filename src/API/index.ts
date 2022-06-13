import axios from "axios";

export const instance = axios.create({
  baseURL: "https://pto-react-default-rtdb.firebaseio.com/"
})