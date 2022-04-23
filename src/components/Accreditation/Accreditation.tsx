import React from 'react';
import style from "./Accreditation.module.css"

function Accreditation() {
  return (
      <div className={style.background}>
        <div className="container">
          <div className={style.accreditation}>
            <div className={style.accreditationTitleWrap}>
              <h2 className={style.mainTitle}>Область аккредитации</h2>
              <h3 className={style.subTitle}>Категории транспортных средств</h3>
            </div>
            <div className={style.categories}>
              <div className={style.category}>
                <div className={style.categoryIcon}>
                  <img className={style.icon} src="/images/Accreditation/accreditation-L-icon.svg" alt="L" />
                </div>
                <div className={style.categoryContent}>
                  <span className={style.categoryName}>L</span>
                  <p className={style.descriptionCategory}>Мопеды, мотовелосипеды, мокики, мотоциклы, мотороллеры,
                    трициклы, квадрициклы.</p>
                </div>
              </div>
              <div className={style.category}>
                <div className={style.categoryIcon}>
                  <img className={style.icon} src="/images/Accreditation/accreditation-M1-icon.svg" alt="L" />
                </div>
                <div className={style.categoryContent}>
                  <span className={style.categoryName}>M1</span>
                  <p className={style.descriptionCategory}>Транспортные средства, используемые для перевозки пассажиров
                    и имеющие,помимо места водителя, не
                    более восьми мест для сидения</p>
                </div>
              </div>
              <div className={style.category}>
                <div className={style.categoryIcon}>
                  <img className={style.icon} src="/images/Accreditation/accreditation-N1-icon.svg" alt="L" />
                </div>
                <div className={style.categoryContent}>
                  <span className={style.categoryName}>N1</span>
                  <p className={style.descriptionCategory}>Транспортные средства, предназначенные для перевозки грузов,
                    имеющие технически допустимую
                    максимальную массу не более 3,5 тонн.</p>
                </div>
              </div>
              <div className={style.category}>
                <div className={style.categoryIcon}>
                  <img className={style.icon} src="/images/Accreditation/accreditation-O2-icon.svg" alt="L" />
                </div>
                <div className={style.categoryContent}>
                  <span className={style.categoryName}>O2</span>
                  <p className={style.descriptionCategory}>Прицепы, технически допустимая максимальная масса которых
                    свыше 0,75 т, но
                    не более 3,5 тонн</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Accreditation;
