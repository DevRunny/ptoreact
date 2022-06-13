import React from 'react';
import style from "./Preloader.module.css"
import classNames from "classnames";

type Props = {
  size: "small" | "medium" | "big"
  styleLoader: "clientLoader" | "adminLoader"
  heightWrapLoader?: "none" | "fullHeight" | undefined
}

const Preloader: React.FC<Props> = ({
                                      size,
                                      styleLoader,
                                      heightWrapLoader = "none"
                                    }) => {

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
      default:
        return style.defaultLoader
    }
  }

  const checkHeight = () => {
    switch (heightWrapLoader) {
      case "none":
        return style.none
      case "fullHeight":
        return style.fullHeight
      default:
        return style.none
    }
  }

  return (
      <div className={classNames(style.loaderWrap, checkHeight())}>
        <div className={classNames(style.loader, checkSize(), checkStyleLoader())}>

        </div>
      </div>
  );
};

export default Preloader;