import React, {useEffect, useState} from 'react';
import AdminMainTitle from "../AdminMainTitle";
import style from "./Accreditation.module.css"
import SectionTitle from "../SectionTitle/SectionTitle";
import AccreditationListItem from "./AccreditationListItem/AccreditationListItem";
import Button from "../../../Button/Button";
import {addSelectCategory} from "../../../../API/acccreditation";
import {useActions} from "../../../../hooks/useActions";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import Preloader from "../../../Preloader/Preloader";
import {useAuth} from "../../../../hooks/useAuth";

function AccreditationList() {

  const {loading, error, allCategories, selectedCategories} = useTypedSelector(state => state.accreditation)
  const {redirect} = useAuth()
  const {fetchAllCategoriesAC, fetchSelectedCategoriesAC} = useActions()
  const [saveChanges, setChangesSave] = useState<boolean>(false)
  const [errorChanges, setErrorChanges] = useState<boolean>(false)

  console.log(selectedCategories)

  const onClickSaveChanges = () => {
    setChangesSave(true)
    if (selectedCategories.length) {
      setErrorChanges(false)
      addSelectCategory(selectedCategories)
      setTimeout(() => {
        setChangesSave(false)
      }, 3000)
    } else {
      setErrorChanges(true)
    }
  }

  useEffect(() => {
    redirect()
    fetchAllCategoriesAC()
    fetchSelectedCategoriesAC()
  }, [])

  if (loading) return <Preloader size={"big"} styleLoader={"adminLoader"} heightWrapLoader={"fullHeight"} />

  return (
      <div className={"adminContentBackground"}>
        <AdminMainTitle titleText={"Область аккредитации"} />
        <div className={style.contentWrap}>
          <SectionTitle titleText={"Выберите категории транспортных средств, на которые вы аттестованы:"} />
          <div className={style.list}>
            {allCategories.length && selectedCategories.length ?
                allCategories.map(category => {
                  const find = selectedCategories.find(selectedCategory => category.id === selectedCategory.id)
                  if (find) {
                    return <AccreditationListItem itemText={category.categoryName} selected={true} category={category} key={category.id} />
                  } else {
                    return <AccreditationListItem itemText={category.categoryName} selected={false} category={category} key={category.id} />
                  }
                })
                :
                <Preloader styleLoader={"adminLoader"} size={"medium"} />
            }
          </div>
          <Button
              text={"Сохранить изменения"}
              mainStyle={style.button}
              type={"button"}
              func={onClickSaveChanges}
          />
          {saveChanges && !errorChanges && <p className={style.notification}>Все изменения успешно сохранены!</p>}
          {saveChanges && errorChanges && <p className={style.notificationError}>Выберите хотя бы одну категорию</p>}
        </div>
      </div>
  );
}

export default AccreditationList;