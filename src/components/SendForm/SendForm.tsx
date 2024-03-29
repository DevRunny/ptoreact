import React from "react";
import style from "./SendForm.module.css";
import Button from "../Button/Button";
import {RoutesName} from "../../routes";
import {useSendForm} from "../../hooks/useSendForm";
import FormItem from "../FormItem/FormItem";
import classNames from "classnames";
import ModalWindow from "../ModalWindow/ModalWindow";
import {Calendar} from "react-rainbow-components";
import TimePicker from "./TimePicker/TimePicker"

function SendForm() {
  const form = useSendForm();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
    form.reset();
  };

  const getMaxDate = () => {
    const today = new Date()
    const maxDateYear = today.getFullYear()
    const maxDateMonth = today.getMonth() + 2
    const maxDateDay = today.getDay()
    return new Date(maxDateYear, maxDateMonth, maxDateDay)
  }

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
            <div className={classNames(style.formItem, style.formItemDate)}>
              <div className={style.item}>
                <label htmlFor="date">Дата прохождения ТО:</label>
                <input
                    className={style.datePicker}
                    value={form.getSelectedDate()}
                    onClick={form.toggleVisibleDatePicker}
                />
              </div>
              <div className={style.item}>
                <label htmlFor="date">Время прохождения ТО:</label>
                <input
                    className={style.datePicker}
                    value={form.selectedTime}
                    onClick={form.toggleVisibleTimePicker}
                />
              </div>
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
        <ModalWindow
            isOpen={form.isDatePickerOpen}
            children={
              <div className={style.wrapDatePicker}>
                <h2>Выберите доступную дату</h2>
                <Calendar
                    style={{width: "100%"}}
                    minDate={new Date()}
                    maxDate={getMaxDate()}
                    onChange={form.changeDate}
                />
                <Button text={"Отмена"} mainStyle={classNames(style.button, style.buttonCancel)} type={"button"} func={() => {
                  form.changeDate(form.selectedDate)
                }} />
              </div>
            }
        />
        <ModalWindow
            isOpen={form.isTimePickerOpen}
            children={
              <TimePicker onChange={form.changeTime} isOpen={form.isTimePickerOpen} selectedTime={form.selectedTime} />
            }
        />
      </div>
  );
}

export default SendForm;
