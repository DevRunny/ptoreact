import React from 'react';
import style from "./AddFieldButton.module.css"

type Props = {
  textButton: string
  onClickFunc: () => void
  icon: string
  buttonStyle?: string
}

const AddFieldButton: React.FC<Props> = ({textButton, onClickFunc, icon, buttonStyle}) => {
  return (
      <div className={buttonStyle ? buttonStyle : style.addFieldFormItem}
           onClick={onClickFunc}>
        <img src={icon} alt={"+"} />{textButton}
      </div>
  );
};

export default AddFieldButton;
