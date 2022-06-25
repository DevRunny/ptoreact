import {useForm} from "react-hook-form";
import {User} from "../types/auth";
import {useActions} from "./useActions";
import {useAuth} from "./useAuth";
import {useEffect, useRef, useState} from "react";
import {useTypedSelector} from "./useTypedSelector";
import style from "../components/LoginForm/LoginForm.module.css";

export const useLoginForm = () => {
  const [email, setEmail] = useState<string>("")
  const [isConfirmEmail, setConfirmEmail] = useState<boolean>(false)
  const [isVisible, setVisible] = useState<boolean>(false)

  const {loading, error} = useTypedSelector(state => state.auth)

  const passwordFieldRef = useRef<HTMLDivElement>(null)

  const {login, setErrorResponseAuth} = useActions();
  const history = useAuth()

  useEffect(() => {
    history.redirect()
  }, [])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setErrorResponseAuth("")
      }, 2000)
    }
  }, [error])

  useEffect(() => {
    setTimeout(() => {
      isConfirmEmail && passwordFieldRef.current?.classList.add(style.formItemActive)
    }, 0)
  }, [isConfirmEmail])

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

  const confirmEmailSubmit = (login: string) => {
    setEmail(login)
    setConfirmEmail(true)
  }

  return {
    register,
    handleSubmit,
    errors,
    error,
    email,
    onSubmit,
    confirmEmailSubmit,
    isConfirmEmail,
    isVisible,
    setVisible,
    loading,
    passwordFieldRef
  }
}