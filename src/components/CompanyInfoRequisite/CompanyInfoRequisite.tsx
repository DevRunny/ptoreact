import React from "react";
import style from "../About/About.module.css";

type Props = {
  nameRequisite: string
  requisite: string
  isBold: boolean
}

const CompanyInfoRequisite: React.FC<Props> = ({nameRequisite, requisite, isBold}) => {
  return (
      <p>
        {nameRequisite}:
        <span className={isBold ? style.companyInfoBold : ""}> {requisite}</span>
      </p>
  )
}

export default CompanyInfoRequisite