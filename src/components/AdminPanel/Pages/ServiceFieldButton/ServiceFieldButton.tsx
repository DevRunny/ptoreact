import React from 'react';
import style from "./ServiceFieldButton.module.css"
import classNames from "classnames";

type Props = {
  textButton: string
  onClickFunc: () => void
  icon: string
  buttonStyle?: string
}

const ServiceFieldButton: React.FC<Props> = ({
                                               textButton,
                                               onClickFunc,
                                               icon,
                                               buttonStyle = style.button
                                             }) => {
  return (
      <div className={buttonStyle ? classNames(style.button, buttonStyle) : style.serviceFieldFormItem}
           onClick={onClickFunc}>
        <img className={style.serviceIcon} src={icon} alt={"+"} />{textButton}
      </div>
  );
};

export default ServiceFieldButton;
