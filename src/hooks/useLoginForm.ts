import {useForm} from "react-hook-form";
import {User} from "../types/auth";
import {useActions} from "./useActions";
import {useAuthHistory} from "./useAuthHistory";
import {ChangeEvent, useState} from "react";

export const useLoginForm = () => {

  const {login} = useActions();
  const history = useAuthHistory()

  const [loginValue, setLoginValue] = useState<string>("")
  const [passwordValue, setPasswordValue] = useState<string>("")

  const onChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginValue(e.target.value)
  }

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value)
  }

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<User>({
    mode: "onSubmit",
  });

  const onSubmit = async (data: User) => {
    await login(data.login, data.password);
    if (localStorage.getItem("auth")) {
      history.redirect()
      reset();
    } else {
      reset();
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    loginValue,
    passwordValue,
    onChangeLogin,
    onChangePassword
  }
}