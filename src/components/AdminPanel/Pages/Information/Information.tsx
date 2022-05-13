import React from 'react';
import style from "./Information.module.css"
import classNames from "classnames";

function Information() {
  return (
      <div className={style.background}>
        <h1>Информация о компании</h1>
        <div className={style.contentBlock}>
          <div className={style.contentWrap}>
            <div className={style.sectionTitle}>
              <span> </span>
              <h2>Основная информация:</h2>
              <hr />
            </div>
            <form className={style.form}>
              <div className={style.formItem}>
                <label className={style.label}>Название компании или ИП:</label>
                <div className={style.wrap}>
                  <input disabled={true} className={style.input} />
                  <button className={style.changeButton}>Изменить</button>
                </div>
              </div>
              <div className={style.formItem}>
                <label className={style.label}>Номер в реестре технического оператора РСА:</label>
                <div className={style.wrap}>
                  <input disabled={true} className={style.input} type={"number"} />
                  <button className={style.changeButton}>Изменить</button>
                </div>
              </div>
              <div className={style.formItem}>
                <label className={style.label}>ИНН:</label>
                <div className={style.wrap}>
                  <input disabled={true} className={style.input} />
                  <button className={style.changeButton}>Изменить</button>
                </div>
              </div>
              <div className={style.formItem}>
                <label className={style.label}>ОГРН:</label>
                <div className={style.wrap}>
                  <input disabled={true} className={style.input} />
                  <button className={style.changeButton}>Изменить</button>
                </div>
              </div>
            </form>
          </div>
          <div className={style.contentWrap}>
            <div className={style.sectionTitle}>
              <span> </span>
              <h2>Контактная информация:</h2>
              <hr />
            </div>
            <div className={style.contacts}>
              <div className={style.phoneForm}>
                <form>
                  <div className={style.formItem}>
                    <label className={style.label}>Телефон:</label>
                    <div className={style.wrap}>
                      <input disabled={true} className={classNames(style.input, style.contact)} />
                      <button className={style.changeButton}>Изменить</button>
                      <button className={style.deleteButton}>Удалить</button>
                    </div>
                    <div className={style.addFieldFormItem}>
                      <img src={"./images/AdminPanel/plusButtonBlue.svg"} alt={"+"} />Добавить поле
                    </div>
                  </div>
                </form>
              </div>
              <div className={style.emailForm}>
                <form>
                  <div className={style.formItem}>
                    <label className={style.label}>Электронная почта:</label>
                    <div className={style.wrap}>
                      <input disabled={true} className={classNames(style.input, style.contact)} />
                      <button className={style.changeButton}>Изменить</button>
                      <button className={style.deleteButton}>Удалить</button>
                    </div>
                    <div className={style.addFieldFormItem}>
                      <img src={"./images/AdminPanel/plusButtonBlue.svg"} alt={"+"} />Добавить поле
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Information;