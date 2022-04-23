import React from 'react';
import style from "./RequestSection.module.css"

function RequestSection() {
  return (
      <div className={style.background}>
        <div className="container">
          <div className={style.requestSection}>
            <div className={style.requestSectionTitleWrap}>
              <h2 className={style.mainTitle}>Заявка на прохождение технического осмотра</h2>
              <hr className={style.underlineTitle} />
              <h3 className={style.subTitle}>Для прохождения технического осмотра автомобиля понадобятся следующие
                документы:</h3>
            </div>
            <div className={style.documentList}>
              <div className={style.document}>
                <img className={style.documentPic} src="/images/RequestSection/passport.png" alt="passport" />
                <div className={style.textDocument}>
                  <p className={style.descriptionDocument}>Документ, удостоверяющий личность</p>
                </div>
              </div>
              <div className={style.document}>
                <img className={style.documentPic} src="/images/RequestSection/document.png" alt="document" />
                <p className={style.descriptionDocument}>Свидетельство о регистрации транспортного средства или паспорт
                  транспортного средства</p>
              </div>
            </div>
            <button className={style.requestSectionButton}>Оформить заявку на прохожение ТО</button>
          </div>
        </div>
      </div>
  );
}

export default RequestSection;