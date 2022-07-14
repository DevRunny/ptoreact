import React from "react";
import style from "./ErrorNotFound.module.css"
import Button from "../../Button/Button";
import {useNavigate} from "react-router-dom";
import {RoutesName} from "../../../routes";

interface IErrorNotFoundProps {
  errorInfo: any
}

export const ErrorNotFound: React.FC<IErrorNotFoundProps> = ({errorInfo}) => {
  const navigate = useNavigate()
 
  return (
      <div className={style.errorBackground}>
        <div className={style.errorContent}>
          <h1 className={style.errorCode}>{errorInfo}</h1>
          <h2 className={style.errorText}>Страница, которую вы запрашиваете, не существует.</h2>
        </div>
        <img className={style.errorImage} src={"/images/Errors/Error404.svg"} alt={"error404"} />
        <div className={style.buttonsWrap}>
          <Button text={"Назад"} mainStyle={style.buttonBackToMain} type={"button"} func={() => {
            navigate(-1)
          }} />
          <Button text={"На главную"} mainStyle={style.buttonBackToMain} type={"button"} func={() => {
            navigate(RoutesName.MAIN)
          }} />
        </div>
      </div>
  )
}