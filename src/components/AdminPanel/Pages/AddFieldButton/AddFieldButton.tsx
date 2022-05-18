import React from 'react';
import style from "./AddFieldButton.module.css"

type Props = {
  textButton: string
  onClickFunc: () => void
  icon: string
}

const AddFieldButton: React.FC<Props> = ({textButton, onClickFunc, icon}) => {
  return (
      <div className={style.addFieldFormItem}
           onClick={onClickFunc}>
        <img src={icon} alt={"+"} />{textButton}
      </div>
  );
};

export default AddFieldButton;
