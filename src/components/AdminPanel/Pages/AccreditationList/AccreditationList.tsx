import AdminMainTitle from "../AdminMainTitle";
import style from "./Accreditation.module.css"
import SectionTitle from "../SectionTitle/SectionTitle";
import AccreditationListItem from "./AccreditationListItem/AccreditationListItem";
import Button from "../../../Button/Button";
import Preloader from "../../../Preloader/Preloader";
import { useAccreditationList } from '../../../../hooks/useAccreditationList';

function AccreditationList() {

  const accreditationList = useAccreditationList()

  if (accreditationList.isLoading) return <Preloader size={"big"} styleLoader={"adminLoader"} heightWrapLoader={"fullHeight"} />

  return (
      <div className={"adminContentBackground"}>
        <AdminMainTitle titleText={"Область аккредитации"} />
        <div className={style.contentWrap}>
          <SectionTitle titleText={"Выберите категории транспортных средств, на которые вы аттестованы:"} />
          <div className={style.list}>
            {accreditationList.allCategories.length && accreditationList.selectedCategories.length ?
                accreditationList.allCategories.map(category => {
                  const find = accreditationList.selectedCategories.find(selectedCategory => category.id === selectedCategory.id)
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
              func={accreditationList.onClickSaveChanges}
          />
        </div>
      </div>
  );
}

export default AccreditationList;