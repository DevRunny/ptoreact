import React, {useEffect} from "react";
import style from "./LoginForm.module.css";
import Button from "../Button/Button";
import {useAuthHistory} from "../../hooks/useAuthHistory";
import {useLoginForm} from "../../hooks/useLoginForm";
import {adminPanelImages} from "../../utils/adminPanelRoutesImages";

function LoginForm() {

  const history = useAuthHistory()
  const form = useLoginForm()

  useEffect(() => {
    history.redirect()
  }, [])

  return (
      <div className={style.background}>
        <div className={style.loginFormWrap}>
          <img className={style.logoCorp} src={adminPanelImages.logo.src} alt={"ENDEL"} />
          <form
              className={style.loginForm}
              onSubmit={form.handleSubmit((data) => {
                form.onSubmit(data);
              })}
          >
            <div className={style.formItem}>
              <label className={style.label} htmlFor="email">
                <img className={style.labelIcon} src={adminPanelImages.loginForm.login.src} alt={adminPanelImages.loginForm.login.alt} />
                {form.errors.login && (
                    <span className={style.alert} role="alert">
                {form.errors.login.message}
              </span>
                )}
              </label>
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
                <img className={style.labelIcon} src={adminPanelImages.loginForm.password.src} alt={adminPanelImages.loginForm.password.alt} />
                {form.errors.password && (
                    <span className={style.alert} role="alert">
                {form.errors.password.message}
              </span>
                )}
              </label>

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
