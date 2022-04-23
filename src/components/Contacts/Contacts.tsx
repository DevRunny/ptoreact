import React from 'react';
import style from "./Contacts.module.css"
import {
  YMaps,
  Map,
  Placemark,
  TrafficControl,
  ZoomControl,
  TypeSelector,
} from "react-yandex-maps";

const mapData = {
  center: [56.310318, 44.009867],
  zoom: 16,
};

const coordinates = [
  {
    id: 1,
    coordinate: [56.310318, 44.009867],
  },
];

function Contacts() {
  return (
      <div className={style.background}>
        <div className="container">
          <div className={style.contacts}>
            <h2 className={style.mainTitle}>Контактная информация</h2>
            <div className={style.cardsContacts}>
              <div className={style.cardContacts}>
                <img className={style.cardIcon} src="/images/Contacts/addressIcon.svg" alt='address' />
                <div className={style.cardContent}>
                  <span className={style.titleCard}>Адрес:</span>
                  <p className={style.textCard}>603105, Нижегородская обл., г.Нижний Новгород, ул.Генкиной, д.23</p>
                </div>
              </div>
              <div className={style.cardContacts}>
                <img className={style.cardIcon} src="/images/Contacts/emailIcon.svg" alt='email' />
                <div className={style.cardContent}>
                  <span className={style.titleCard}>Электронная почта:</span>
                  <p className={style.textCard}>pto-station@mail.ru</p>
                </div>
              </div>
              <div className={style.cardContacts}>
                <img className={style.cardIcon} src="/images/Contacts/modeIcon.svg" alt='mode' />
                <div className={style.cardContent}>
                  <span className={style.titleCard}>Режим работы:</span>
                  <p className={style.textCard}>Понедельник-Пятница: 9:00-18:00 Суббота-Воскресенье: выходные</p>
                </div>
              </div>
              <div className={style.cardContacts}>
                <img className={style.cardIcon} src="/images/Contacts/phoneIcon.svg" alt='phone' />
                <div className={style.cardContent}>
                  <span className={style.titleCard}>Телефон:</span>
                  <p className={style.textCard}>+7 (999) 999-99-99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <YMaps>
          <Map
              className={style.yandexMap}
              defaultState={mapData}
          >
            {coordinates.map((coordinate) => (
                <Placemark
                    key={coordinate.id}
                    geometry={coordinate.coordinate}
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: "/images/Contacts/mappointIcon.svg",
                      iconImageSize: [51, 62],
                      iconImageOffset: [-18, -60],
                    }}
                />
            ))}
            <TrafficControl />
            <ZoomControl
                options={{
                  size: "auto",
                }}
            />
            <TypeSelector />
          </Map>
        </YMaps>
      </div>
  );
}

export default Contacts;