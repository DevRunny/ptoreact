import React, {useEffect} from 'react';
import {Map, Placemark, TrafficControl, TypeSelector, YMaps, ZoomControl} from "react-yandex-maps";
import style from "../Contacts.module.css";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

function YandexMapComponent() {
  const stateInfo = useTypedSelector(state => state.about)
  const mapState = {
    center: [56.310318, 44.009867],
    zoom: 16,
  };

  const placeMarks = [
    {
      id: 1,
      coordinate: [56.310318, 44.009867],
      nameCompany: stateInfo.nameCompany,
      companyInfo: `<b>${stateInfo.nameCompany}</b>` +
          '<br />603105, Нижегородская обл., г.Нижний Новгород, ул.Генкиной, д.23 ' +
          '<br /> Понедельник-Пятница: 9:00-18:00 ' +
          '<br /> Суббота-Воскресенье: выходные'
    },
  ];
  return (
      <YMaps>
        <Map
            className={style.yandexMap}
            defaultState={mapState}
        >
          {placeMarks.map((placeMark) => (
              <Placemark
                  key={placeMark.id}
                  geometry={placeMark.coordinate}
                  options={{
                    iconLayout: "default#image",
                    iconImageHref: "/images/Contacts/mappointIcon.svg",
                    iconImageSize: [51, 62],
                    iconImageOffset: [-18, -60],
                  }}
                  properties={{
                    hintContent: placeMark.nameCompany,
                    balloonContent: placeMark.companyInfo
                  }}
                  modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
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
  );
}

export default YandexMapComponent;