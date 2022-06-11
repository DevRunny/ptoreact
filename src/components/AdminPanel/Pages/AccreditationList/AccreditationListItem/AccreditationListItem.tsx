import React, {useState} from 'react';
import style from "./AccreditationListItem.module.css"
import classNames from "classnames";
import {useActions} from "../../../../../hooks/useActions";
import {Category} from "../../../../../types/accreditation";

type Props = {
  category: Category
  itemText: string
  selected: boolean
}

const AccreditationListItem: React.FC<Props> = ({itemText, selected, category}) => {
  const {selectCategory, unselectCategory} = useActions()

  const [active, setActive] = useState<boolean>(selected)

  const onClickItem = () => {
    if (active) {
      unselectCategory(category)
      setActive(!active)
    } else {
      selectCategory(category)
      setActive(!active)
    }
  }

  return (
      <div
          className={active ? classNames(style.listItem, style.activeListItem) : style.listItem}
          onClick={onClickItem}
      >
        {itemText}
      </div>
  );
};

export default AccreditationListItem;