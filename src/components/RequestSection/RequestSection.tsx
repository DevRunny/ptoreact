import React from 'react';
import style from "./RequestSection.module.css"
import RequestComponent from "./RequestComponent/RequestComponent";
import classNames from "classnames";
import {useRequestRef} from "../../hooks/sectionsRefs/useRequestRef";
import {ButtonWithSendForm} from "../../HOCs/Button";


const RequestSection = () => {
  const request = useRequestRef()
  return (
      <div ref={request.requestRef} className={classNames(style.background, "rootBackground")}>
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
            <ButtonWithSendForm text="Оформить заявку на прохожение ТО" mainStyle={style.requestSectionButton} />
          </div>
        </div>
      </div>
  );
}

export default RequestSection;