import React, {useEffect, useRef} from 'react';
import style from "./RequestSection.module.css"
import RequestComponent from "./RequestComponent/RequestComponent";
import classNames from "classnames";
import {useActions} from "../../hooks/useActions";


const RequestSection = () => {

  const requestRef = useRef<HTMLDivElement>(null)
  const {setRequestRefAC} = useActions()

  useEffect(() => {
    setRequestRefAC(requestRef.current)
  }, [requestRef.current])

  return (
      <div ref={requestRef} className={classNames(style.background, "rootBackground")}>
        <div className="container">
          <div className={style.requestSection}>
            <div className={style.requestSectionTitleWrap}>
              <h2 className={style.mainTitle}>Заявка на прохождение технического осмотра</h2>
              <hr className={style.underlineTitle} />
              <h3 className={style.subTitle}>Для прохождения технического осмотра автомобиля понадобятся следующие
                документы:</h3>
            </div>
            <div className={style.documentList}>
              <RequestComponent
                  urlImage={"/images/RequestSection/passport.png"}
                  alt={"passport"}
                  descriptionDocument={"Документ, удостоверяющий личность"}
              />
              <RequestComponent
                  urlImage={"/images/RequestSection/document.png"}
                  alt={"document"}
                  descriptionDocument={"Свидетельство о регистрации транспортного средства или паспорт\n" +
                      "                  транспортного средства"}
              />
            </div>
            <button className={style.requestSectionButton}>Оформить заявку на прохожение ТО</button>
          </div>
        </div>
      </div>
  );
}

export default RequestSection;