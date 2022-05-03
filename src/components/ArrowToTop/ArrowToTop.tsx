import React from 'react';
import style from "./ArrowToTop.module.css"
import {useArrow} from "../../hooks/useArrow";

const ArrowToTop = () => {

  const arrow = useArrow()

  return (
      <div
          className={arrow.visible ? style.arrow : style.arrowInvisible}
          onClick={arrow.onClickArrow}>
        <img src={"/images/ArrowToTop/Arrow-to-top.svg"} />
      </div>
  );
}

export default ArrowToTop;