import React from 'react';
import {Map, Placemark, TrafficControl, TypeSelector, YMaps, ZoomControl} from "react-yandex-maps";
import style from "../Contacts.module.css";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {Address, Coordinate, MapState, WorkingMode} from "../../../types/contacts";

type Props = {
  mapState: MapState
  coordinates: Coordinate[]
  addresses: Address[]
  workingModes: WorkingMode[]
}

const YandexMapComponent: React.FC<Props> = ({
                                               mapState,
                                               coordinates,
                                               workingModes,
                                               addresses
                                             }) => {
  const stateInfo = useTypedSelector(state => state.about)

  return (
      <YMaps>
        <Map
            className={style.yandexMap}
            defaultState={mapState}
        >
          {coordinates.map((placeMark) => (
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
<br />${addresses[placeMark.id - 1].address} 
<br />${workingModes[placeMark.id - 1].workingMode}`
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