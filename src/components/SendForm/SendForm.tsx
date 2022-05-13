import React, {ChangeEvent, useRef, useState} from 'react';
import style from "./SendForm.module.css"
import Button from "../Button/Button";
import {useForm} from "react-hook-form";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useNavigate} from "react-router-dom";
import {RoutesName} from "../../routes";

function SendForm() {

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data))
    reset()
  };

  const stateCategories = useTypedSelector(state => state.accreditation.categories)

  const [category, setCategory] = useState<string>(stateCategories[0].categoryName)

  const onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value)
  }

  const check = (option: string) => {
    const currentCategory = stateCategories.find((cat) => cat.categoryName === option)
    if (currentCategory && currentCategory.categoryDescription) {
      return currentCategory.categoryDescription
    }
  }


  const navigate = useNavigate()
  const overlayRef = useRef<HTMLDivElement>(null)

  const onClickOverlay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      navigate(RoutesName.MAIN)
    }
  }

  return (
      <div ref={overlayRef} onMouseDown={(e) => {
        onClickOverlay(e)
      }} className={style.overlay}>
        <div className={style.background}>
          <img
              className={style.crossButton}
              src={"images/SendForm/cross.svg"}
              alt={"X"}
              onMouseDown={() => {
                navigate(RoutesName.MAIN)
              }}
          />
          <h2 className={style.title}>Заявка на прохождение ТО</h2>
          <form
              className={style.sendForm}
              onSubmit={handleSubmit(onSubmit)}
          >
            <div className={style.formItem}>
              <label className={style.label} htmlFor="fullName">
                Имя, Фамилия:
              </label>
              {errors.fullName && (
                  <span className={style.alert} role="alert">
                {errors.fullName.message}
              </span>
              )}
              <input
                  className={style.input}
                  id="fullName"
                  {...register("fullName", {
                    required: "Поле обязательно к заполнению",
                    pattern: {
                      value: /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]+|[А-ЯA-Z][\x27а-яa-z]+-([А-ЯA-Z][\x27а-яa-z]+|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]+(\040[А-ЯA-Z][\x27а-яa-z]+)?$/,
                      message: "Неккоректно введено имя или фамилия",
                    },
                  })}
                  type="text"
                  placeholder="Иван Иванов"
              />
            </div>

            <div className={style.formItem}>
              <label className={style.label} htmlFor="phone">
                Телефон:
              </label>
              {errors.phone && (
                  <span className={style.alert} role="alert">
                {errors.phone.message}
              </span>
              )}
              <input
                  className={style.input}
                  id="phone"
                  {...register("phone", {
                    required: "Поле обязательно к заполнению",
                    pattern: {
                      value: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
                      message: "Некорректный нормер телефона",
                    },
                  })}
                  type="tel"
                  placeholder="+7 (999) 999-99-99"
              />
            </div>

            <div className={style.formItem}>
              <label htmlFor="">
                Выберите категорию ТС:
              </label>
              <select className={style.select} value={category} onChange={(e) => {
                onChangeCategory(e)
              }}>
                {stateCategories.map(cat => {
                  return <option className={style.option} value={cat.categoryName}>{cat.categoryName} -
                    категория </option>
                })}
              </select>
              <p className={style.descriptionCategory}>
                {check(category)}
              </p>
            </div>

            <div className={style.formItem}>
              <label htmlFor="date">
                Дата и время прохождения ТО:
              </label>
              {errors.date && (
                  <span className={style.alert} role="alert">
                {errors.date.message}
              </span>)}
              <input
                  className={style.input}
                  id="date"
                  type="datetime-local"
                  {...register("date", {
                    required: "Выберите предполагаемую дату прохождения ТО",
                  })}
              />
            </div>

            <div className={style.formItem}>
              <label>
                Дополнительная информация:
              </label>
              <textarea className={style.textarea}
                        maxLength={100}
                        placeholder={"Необязательное поле, не более 100 символов"}>

              </textarea>
            </div>

            <div className="">
              {errors.acceptTerms && (
                  <span className={style.alert} role="alert">
                {errors.acceptTerms?.message}
                    <br />
              </span>
              )}
              <input
                  type="checkbox"
                  id="acceptTerms"
                  className={style.checkbox}
                  {...register("acceptTerms", {
                    required: "Необходимо согласиться с условиями",
                  })}
              />
              <label className={style.checkboxText} htmlFor="acceptTerms">Я соглашаюсь на обработку персональных
                данных</label>
            </div>

            <Button text="Отправить заявку" mainStyle={style.button} type="submit" />
          </form>
        </div>
      </div>
  );
}

export default SendForm;