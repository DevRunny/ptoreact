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

  const {selectCategory, unselectCategory, openResponseModalFail} = useActions()

  const [active, setActive] = useState<boolean>(selected)

  const onClickItem = () => {
    // if (selectedCategories.length !== 1) {
    if (active) {
      unselectCategory(category.id)
      setActive(!active)
    } else {
      selectCategory(category.id)
      setActive(!active)
    }
    // } else {
    //   if (active) {
    //     openResponseModalFail("Должна быть выбрана хотя бы одна категория")
    //   } else {
    //     selectCategory(category)
    //     setActive(!active)
    //   }
    // }
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