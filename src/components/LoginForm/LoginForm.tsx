import React from "react";
import { useForm } from "react-hook-form";
import style from "./LoginForm.module.css";
import Button from "../Button/Button";
import { useActions } from "../../hooks/useActions";
import { User } from "../../types/auth";
import { useTypedSelector } from "../../hooks/useTypedSelector";

function LoginForm() {
  const { login } = useActions();
  const state = useTypedSelector((state) => state.auth);
  console.log(state);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>({
    mode: "onSubmit",
  });
  const onSubmit = (data: User) => {
    login(data.login, data.password);
    reset();
  };
  return (
    <div className={style.background}>
      <div className={style.loginFormWrap}>
        <h2 className={style.title}>Вход</h2>
        <form
          className={style.loginForm}
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
          })}
        >
          <div className={style.formItem}>
            <label className={style.label} htmlFor="email">
              Логин
            </label>
            {errors.login && (
              <span className={style.alert} role="alert">
                {errors.login.message}
              </span>
            )}
            <input
              className={style.input}
              id="email"
              {...register("login", {
                required: "Поле обязательно к заполнению",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Введенные данные не являются электронной почтой",
                },
              })}
              type="email"
              placeholder="email"
            />
          </div>

          <div className={style.formItem}>
            <label className={style.label} htmlFor="password">
              Пароль
            </label>
            {errors.password && (
              <span className={style.alert} role="alert">
                {errors.password.message}
              </span>
            )}
            <input
              className={style.input}
              id="password"
              {...register("password", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 5,
                  message: "Минимальное кол-во символов: 5",
                },
              })}
              type="password"
              placeholder="password"
            />
          </div>

          <Button text="Войти" mainStyle={style.button} type="submit" />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
