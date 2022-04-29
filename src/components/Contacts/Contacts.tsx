import React, {useEffect} from 'react';
import style from "./Contacts.module.css"
import ContactComponent from "./ContactsComponents/ContactComponent";
import YandexMapComponent from "./ContactsComponents/YandexMapComponent";
import classNames from "classnames";
import {getContacts} from "../../API/contacts";

type Props = {}

const Contacts: React.FC<Props> = () => {
    useEffect(() => {
        getContacts().then(data => console.log(data))
    }, [])
  return (
      <div className={classNames(style.background, "rootBackground")}>
        <div className="container">
          <div className={style.contacts}>
            <h2 className={style.mainTitle}>Контактная информация</h2>
            <div className={style.cardsContacts}>
              <ContactComponent
                  urlImage={"/images/Contacts/addressIcon.svg"}
                  alt={"address"}
                  titleCard={"Адрес:"}
                  textCard={"603105, Нижегородская обл., г.Нижний Новгород, ул.Генкиной, д.23"}
              />
              <ContactComponent
                  urlImage={"/images/Contacts/emailIcon.svg"}
                  alt={"email"}
                  titleCard={"Электронная почта:"}
                  textCard={"pto-station@mail.ru"}
              />
              <ContactComponent
                  urlImage={"/images/Contacts/modeIcon.svg"}
                  alt={"mode"}
                  titleCard={"Режим работы:"}
                  textCard={"Понедельник-Пятница: 9:00-18:00 Суббота-Воскресенье: выходные"}
              />
              <ContactComponent
                  urlImage={"/images/Contacts/phoneIcon.svg"}
                  alt={"phone"}
                  titleCard={"Телефон:"}
                  textCard={"+7 (999) 999-99-99"}
              />
            </div>
          </div>
        </div>
        <YandexMapComponent />
      </div>
  );
}

export default Contacts;