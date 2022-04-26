import React from "react";
import style from "../About.module.css";

type Props = {
    registryNum: number
    inn: number
    ogrn: number
}

const CompanyInfo: React.FC<Props> = ({registryNum,inn,ogrn}) => {
    return (
        <div className={style.companyInfo}>
            <p>
                Номер в реестре технического оператора РСА:
                <span className={style.companyInfoBold}> {registryNum}</span>
            </p>
            <p>
                ИНН:
                <span className={style.companyInfoBold}> {inn}</span>
            </p>
            <p>
                ОГРН:
                <span className={style.companyInfoBold}> {ogrn}</span>
            </p>
        </div>
    )
}

export default CompanyInfo