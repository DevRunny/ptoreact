import React, {useState} from 'react';
import style from "./AccreditationListItem.module.css"
import classNames from "classnames";

type Props = {
    itemText: string
}

const AccreditationListItem: React.FC<Props> = ({itemText}) => {
    const [active, setActive] = useState<boolean>(false)
    return (
        <div className={active ? classNames(style.listItem, style.activeListItem) : style.listItem}>
            {itemText}
        </div>
    );
};

export default AccreditationListItem;