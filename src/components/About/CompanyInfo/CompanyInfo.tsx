import React from "react";
import style from "../About.module.css";
import CompanyInfoRequisite from "../../CompanyInfoRequisite/CompanyInfoRequisite";
import {Requisites} from "../../../types/about";

type Props = {
  requisites: Requisites
};

enum ENameIdTypeOrganization {
  OGRNIP = "ОГРНИП",
  OGRN = "ОГРН"
}

const CompanyInfo: React.FC<Props> = ({requisites}) => {

  const getNameIdTypeOrganization = (): ENameIdTypeOrganization => {
    if (requisites.isOgrnip) {
      return ENameIdTypeOrganization.OGRNIP
    }
    return ENameIdTypeOrganization.OGRN
  }

  return (
      <div className={style.companyInfo}>
        <CompanyInfoRequisite
            isBold={true}
            nameRequisite={"Номер в реестре технического оператора РСА"}
            requisite={requisites.numRegistry}
        />
        <CompanyInfoRequisite
            isBold={true}
            nameRequisite={"ИНН"}
            requisite={requisites.inn}
        />
        <CompanyInfoRequisite
            isBold={true}
            nameRequisite={getNameIdTypeOrganization()}
            requisite={requisites.ogrn}
        />
      </div>
  );
};

export default CompanyInfo;
