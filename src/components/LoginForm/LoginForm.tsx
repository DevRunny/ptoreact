import React, {ChangeEvent, useEffect, useState} from "react";
import style from "./LoginForm.module.css";
import Button from "../Button/Button";
import {useAuthHistory} from "../../hooks/useAuthHistory";
import {useLoginForm} from "../../hooks/useLoginForm";

function LoginForm() {

  const history = useAuthHistory()
  const form = useLoginForm()

  useEffect(() => {
    history.redirect()
  }, [])

  return (
      <div className={style.background}>
        <div className={style.loginFormWrap}>
          <h2 className={style.title}>Вход</h2>
          <form
              className={style.loginForm}
              onSubmit={form.handleSubmit((data) => {
                form.onSubmit(data);
              })}
          >
            <div className={style.formItem}>
              <label className={style.label} htmlFor="email">
                Логин
              </label>
              {form.errors.login && (
                  <span className={style.alert} role="alert">
                {form.errors.login.message}
              </span>
              )}
              <input
                  className={style.input}
                  id="email"
                  {...form.register("login", {
                    required: "Поле обязательно к заполнению",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Введенные данные не являются электронной почтой",
                    },
                  })}
                  type="email"
                  placeholder="email"
                  value={form.loginValue}
                  onChange={(e) => {
                    form.onChangeLogin(e)
                  }}
              />
            </div>

            <div className={style.formItem}>
              <label className={style.label} htmlFor="password">
                Пароль
              </label>
              {form.errors.password && (
                  <span className={style.alert} role="alert">
                {form.errors.password.message}
              </span>
              )}
              <input
                  className={style.input}
                  id="password"
                  {...form.register("password", {
                    required: "Поле обязательно к заполнению",
                    minLength: {
                      value: 5,
                      message: "Минимальное кол-во символов: 5",
                    },
                  })}
                  type="password"
                  placeholder="password"
                  value={form.passwordValue}
                  onChange={(e) => {
                    form.onChangePassword(e)
                  }}
              />
            </div>

            <Button text="Войти" mainStyle={style.button} type="submit" />
          </form>
        </div>
      </div>
  );
}

export default LoginForm;
