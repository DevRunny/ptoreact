import React from "react";
import style from "./About.module.css";
import classNames from "classnames";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import CompanyContacts from "./CompanyContacts/CompanyContacts";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {AboutButtonText, ButtonWithGoTo} from "../../HOCs/Button";

type Props = {}

const About: React.FC<Props> = () => {

  const state = useTypedSelector(state => state.about)

  if (state.error) {
    return (
        <div>{state.error}</div>
    )
  }

  if (state.loading) {
    return (
        <div className={"loader"} />
    )
  }

  return (
      <div className={classNames(style.background, "rootBackground")}>
        <div className="container">
          <div className={style.about}>
            <h1 className={style.title}>
              <p>Пункт технического осмотра автотранспортных средств</p>
              <p>{state.nameCompany}</p>
            </h1>
            <CompanyInfo requisites={state.requisites} />
            <CompanyContacts />
            <div className={style.buttonsWrap}>
              <ButtonWithGoTo text={AboutButtonText.request} mainStyle={style.aboutButton} />
              <ButtonWithGoTo text={AboutButtonText.contacts} mainStyle={style.aboutButton} />
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
