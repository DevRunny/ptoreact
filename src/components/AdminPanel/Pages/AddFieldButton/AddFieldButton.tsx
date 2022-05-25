import React from 'react';
import style from "./AddFieldButton.module.css"
import classNames from "classnames";

type Props = {
  textButton: string
  onClickFunc: () => void
  icon: string
  buttonStyle?: string
}

const AddFieldButton: React.FC<Props> = ({
                                           textButton,
                                           onClickFunc,
                                           icon,
                                           buttonStyle = style.button
                                         }) => {
  return (
      <div className={buttonStyle ? classNames(style.button, buttonStyle) : style.addFieldFormItem}
           onClick={onClickFunc}>
        <img src={icon} alt={"+"} />{textButton}
      </div>
  );
};

export default AddFieldButton;
