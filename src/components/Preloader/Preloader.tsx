import React from 'react';
import style from "./Preloader.module.css"

type Props = {
    size: "small" | "medium" | "big"
}

const Preloader: React.FC<Props> = ({size}) => {

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

    return (
        <div className={checkSize()}>

        </div>
    );
};

export default Preloader;