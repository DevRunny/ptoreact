import React from "react";
import style from "../About.module.css";
import CompanyInfoRequisite from "../../CompanyInfoRequisite/CompanyInfoRequisite";
import {Requisites} from "../../../types/about";

type Props = {
  requisites: Requisites
};

const CompanyInfo: React.FC<Props> = ({requisites}) => {
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
            nameRequisite={"ОГРН"}
            requisite={requisites.ogrn}
        />
      </div>
  );
};

export default CompanyInfo;
