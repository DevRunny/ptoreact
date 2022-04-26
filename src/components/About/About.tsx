import React from "react";
import style from "./About.module.css";
import classNames from "classnames";
import CompanyContacts from "./CompanyContacts/CompanyContacts";
import CompanyInfo from "./CompanyInfo/CompanyInfo";

function About() {
  return (
      <div className={classNames(style.background, "rootBackground")}>
        <div className="container">
          <div className={style.about}>
            <h1 className={style.title}>
              <p>Пункт технического осмотра автотранспортных средств</p>
              <p>ООО «Делюкс-ПТО»</p>
            </h1>
            <CompanyInfo />
            <CompanyContacts />
            <div className={style.buttonsWrap}>
              <button className={style.aboutButton}>Записаться на ТО</button>
              <button className={style.aboutButton}>Как нас найти</button>
            </div>
            <img
                className={style.carImage}
                src="/images/About/About-car-image.svg"
                alt="car"
            />
          </div>
        </div>
      </div>
  );
}

export default About;
