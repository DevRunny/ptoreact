import React from 'react';
import style from "./Preloader.module.css"
import classNames from "classnames";

type Props = {
  size: "small" | "medium" | "big"
  styleLoader: "clientLoader" | "adminLoader"
}

const Preloader: React.FC<Props> = ({size, styleLoader}) => {

  const checkSize = () => {
    switch (size) {
      case "small":
        return style.small
      case "medium":
        return style.medium
      case "big":
        return style.big
      default:
        return style.medium
    }
  }

  const checkStyleLoader = () => {
    switch (styleLoader) {
      case "clientLoader":
        return style.clientLoader
      case "adminLoader":
        return style.adminLoader
    }
  }

  return (
      <div className={classNames(style.loader, checkSize(), checkStyleLoader())}>

      </div>
  );
};

export default Preloader;