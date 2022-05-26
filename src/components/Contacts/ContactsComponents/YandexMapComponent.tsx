import React from 'react';
import {Map, Placemark, TrafficControl, TypeSelector, YMaps, ZoomControl} from "react-yandex-maps";
import style from "../Contacts.module.css";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {MapState} from "../../../types/contacts";
import {Point} from "../../../types/points";

type Props = {
  mapState: MapState
  points: Point[]
}

const YandexMapComponent: React.FC<Props> = ({
                                               mapState,
                                               points,
                                             }) => {
  const stateInfo = useTypedSelector(state => state.about)

  return (
      <YMaps>
        <Map
            className={style.yandexMap}
            defaultState={mapState}
        >
          {points.map((placeMark) => (
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
                    hintContent: stateInfo.nameCompany,
                    balloonContent: `<b>${stateInfo.nameCompany}</b>
                  <br />${placeMark.address}
                  <br />${placeMark.workingMode}`
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