import React from "react";
import style from "../About.module.css";
import CompanyInfoRequisite from "../../CompanyInfoRequisite/CompanyInfoRequisite";

type Props = {};

const CompanyInfo: React.FC<Props> = () => {
  return (
      <div className={style.companyInfo}>
        <CompanyInfoRequisite
            isBold={true}
            nameRequisite={"Номер в реестре технического оператора РСА"}
            requisite={12345}
        />
        <CompanyInfoRequisite
            isBold={true}
            nameRequisite={"ИНН"}
            requisite={123456854321}
        />
        <CompanyInfoRequisite
            isBold={true}
            nameRequisite={"ОГРН"}
            requisite={123454351468438}
        />
      </div>
  );
};

export default CompanyInfo;
