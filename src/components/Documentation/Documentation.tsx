import React from 'react';
import style from "./Documentation.module.css"

function Documentation() {
  return (
      <div className={style.background}>
        <div className={style.documentationTitleWrap}>
          <h2 className={style.mainTitle}>Документация</h2>
          <h3 className={style.subTitle}>Перечень документов для ознакомления</h3>
        </div>
        <div className="container">
          <div className={style.documentsWrap}>
            <div className={style.document}>
              <img className={style.image} src="/images/Documentation/documentImage.svg" alt="document" />
              <p className={style.documentText}>Федеральный закон о техническом осмотре транспортных средств </p>
              <button className={style.documentationButton}>Посмотреть</button>
            </div>
            <div className={style.document}>
              <img className={style.image} src="/images/Documentation/documentImage.svg" alt="document" />
              <p className={style.documentText}>Правила проведения технического осмотра транспортных средств</p>
              <button className={style.documentationButton}>Посмотреть</button>
            </div>
            <div className={style.document}>
              <img className={style.image} src="/images/Documentation/documentImage.svg" alt="document" />
              <p className={style.documentText}>Типовая форма договора о проведении технического осмотра</p>
              <button className={style.documentationButton}>Посмотреть</button>
            </div>
            <div className={style.document}>
              <img className={style.image} src="/images/Documentation/documentImage.svg" alt="document" />
              <p className={style.documentText}>Стоимость предельного размера платы за проведение технического
                осмотра</p>
              <button className={style.documentationButton}>Посмотреть</button>
            </div>
            <div className={style.document}>
              <img className={style.image} src="/images/Documentation/documentImage.svg" alt="document" />
              <p className={style.documentText}>Аттестат аккредитации оператора технического осмотра транспортных
                средств</p>
              <button className={style.documentationButton}>Посмотреть</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Documentation;