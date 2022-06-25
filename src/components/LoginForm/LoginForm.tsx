import React from "react";
import style from "./LoginForm.module.css";
import Button from "../Button/Button";
import {useLoginForm} from "../../hooks/useLoginForm";
import {adminPanelImages} from "../../utils/adminPanelRoutesImages";
import Preloader from "../Preloader/Preloader";
import classNames from "classnames";

function LoginForm() {
  const form = useLoginForm()

  return (
      <div className={style.background}>
        <div className={style.loginFormWrap}>
          <img className={style.logoCorp} src={adminPanelImages.logo.src} alt={"ENDEL"} />
          <form
              className={style.loginForm}
              onSubmit={form.handleSubmit((data) => {
                form.confirmEmailSubmit(data.login);
                if (form.isConfirmEmail) {
                  form.onSubmit(data);
                }
              })}
          >
            <div className={style.inputs}>
              <div className={style.formItem}>
                <label className={style.label} htmlFor="email">
                  <img className={style.labelIcon} src={adminPanelImages.loginForm.login.src} alt={adminPanelImages.loginForm.login.alt} />
                  <span className={style.alert} role="alert">
                    {form.error}
                  </span>
                  {form.errors.login && (
                      <span className={style.alert} role="alert">
                          {form.errors.login.message}
                      </span>
                  )}
                </label>

                <input
                    className={classNames(style.input, form.isConfirmEmail ? style.inputLogin : style.inputLoginDefault)}
                    id="email"
                    {...form.register("login", {
                      required: "Введите логин",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Введенные данные не являются электронной почтой",
                      },
                    })}
                    type="email"
                    placeholder="email"
                />
              </div>

              {
                  form.isConfirmEmail && <div ref={form.passwordFieldRef}
                                              className={style.formItemDefault}>
                  <label className={style.label} htmlFor="password">
                    <img className={style.labelIcon} src={adminPanelImages.loginForm.password.src} alt={adminPanelImages.loginForm.password.alt} />
                  </label>

                  <input
                    autoFocus={false}
                    className={classNames(style.input, style.inputPassword)}
                    id="password"
                    {...form.register("password", {
                      required: "Введите пароль",
                      minLength: {
                        value: 5,
                        message: "Минимальное кол-во символов: 5",
                      },
                    })}
                    type={form.isVisible ? "text" : "password"}
                    placeholder="password"
                  />
                  <img
                    className={style.vision}
                    src={form.isVisible ? adminPanelImages.loginForm.visible.src : adminPanelImages.loginForm.invisible.src}
                    alt={"show"}
                    onClick={() => {
                      form.setVisible(!form.isVisible)
                    }
                    } />
                    {form.errors.password && (
                        <span className={style.alertBottom} role="alert">
                {form.errors.password.message}
              </span>
                    )}
                </div>
              }
            </div>

            {!form.loading
                ?
                form.isConfirmEmail ?
                    <Button text="Войти" mainStyle={style.button} type="submit" />
                    :
                    <Button text="Далее" mainStyle={style.button} type="submit" />
                :
                <Preloader size={"small"} styleLoader={"adminLoader"} />
            }

          </form>
        </div>
      </div>
  );
}

export default LoginForm;
