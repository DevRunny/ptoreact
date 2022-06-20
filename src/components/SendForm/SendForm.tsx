import React from "react";
import style from "./SendForm.module.css";
import Button from "../Button/Button";
import {RoutesName} from "../../routes";
import {useSendForm} from "../../hooks/useSendForm";
import FormItem from "../FormItem/FormItem";
import classNames from "classnames";

function SendForm() {
  const form = useSendForm();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
    form.reset();
  };

  return (
      <div
          ref={form.overlayRef}
          onMouseDown={(e) => {
            form.onClickOverlay(e);
          }}
          className={style.overlay}
      >
        <div className={style.background}>
          <img
              className={style.crossButton}
              src={"images/SendForm/cross.svg"}
              alt={"X"}
              onMouseDown={() => {
                form.navigate(RoutesName.MAIN);
              }}
          />
          <h2 className={style.title}>Заявка на прохождение ТО</h2>
          <form className={style.sendForm} onSubmit={form.handleSubmit(onSubmit)}>
            <FormItem
                element={"input"}
                formItemStyle={style.formItem}
                id={"fullName"}
                errors={form.errors}
                labelName={"Имя, Фамилия:"}
                labelStyle={style.label}
                mainStyleElement={style.input}
                register={form.register}
                patternValue={
                  /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]+|[А-ЯA-Z][\x27а-яa-z]+-([А-ЯA-Z][\x27а-яa-z]+|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]+(\040[А-ЯA-Z][\x27а-яa-z]+)?$/
                }
                patternMessage={"Неккоректно введены имя или фамилия"}
                elementType={"text"}
                elementPlaceholder={"Иван Иванов"}
            />
            <FormItem
                element="input"
                formItemStyle={style.formItem}
                id="phone"
                errors={form.errors}
                labelName={"Телефон:"}
                labelStyle={style.label}
                mainStyleElement={style.input}
                register={form.register}
                elementPlaceholder={"+7 (999) 999-99-99"}
                elementType="tel"
                patternValue={/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/}
                patternMessage={"Неккоректный номер телефона"}
            />
            <FormItem
                element="select"
                id="category"
                labelName="Выберите категорию ТС:"
                labelStyle={style.label}
                formItemStyle={style.formItem}
                mainStyleElement={style.select}
                errors={form.errors}
                register={form.register}
                selectOptions={form.categories.map(
                    (category) => category.categoryName + " - категория")}
                selectDescription={form.currentCategoryDesc}
                selectDescriptionStyle={style.descriptionCategory}
                onChangeFunc={form.onChangeCategory}
            />
            <div className={style.formItem}>
              <label htmlFor="date">Дата и время прохождения ТО:</label>
              {form.errors.date && (
                  <span className={style.alert} role="alert">
                {form.errors.date.message}
              </span>
              )}
              <input
                  className={style.input}
                  id="date"
                  type="datetime-local"
                  {...form.register("date", {
                    required: "Выберите предполагаемую дату прохождения ТО",
                  })}
              />
            </div>
            <FormItem
                element="textarea"
                formItemStyle={style.formItem}
                id="comment"
                labelName="Дополнительная информация:"
                labelStyle={style.label}
                mainStyleElement={style.textarea}
                register={form.register}
                errors={form.errors}
                elementPlaceholder={"Необязательное поле, не более 100 символов"}
            />
            <FormItem
                element="checkbox"
                id="acceptTerms"
                errors={form.errors}
                labelName={"Я соглашаюсь на "}
                labelStyle={style.checkboxText}
                mainStyleElement={style.checkbox}
                register={form.register}
                formItemStyle={classNames(style.formItem, style.formItemCheckbox)}
                elementType={"checkbox"}
            />

            <Button
                text="Отправить заявку"
                mainStyle={style.button}
                type="submit"
            />
          </form>
        </div>
      </div>
  );
}

export default SendForm;
