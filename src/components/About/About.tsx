import React from 'react';
import style from "./About.module.css"
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import CompanyContacts from "./CompanyContacts/CompanyContacts";

function About() {
  return (
      <div className={style.background}>
        <div className="container">
          <div className={style.about}>
            <h1 className={style.title}>
              <p>Пункт технического осмотра автотранспортных средств</p>
              <p>ООО «Делюкс-ПТО»</p>
            </h1>
            <CompanyInfo registryNum={12345} inn={123456854321} ogrn={123454351468438}/>
            <CompanyContacts />
            <div className={style.buttonsWrap}>
              <button className={style.aboutButton}>Записаться на ТО</button>
              <button className={style.aboutButton}>Как нас найти</button>
            </div>
            <img className={style.carImage} src="/images/About/About-car-image.svg" alt="car" />
          </div>
        </div>
      </div>
  );
}

export default About;