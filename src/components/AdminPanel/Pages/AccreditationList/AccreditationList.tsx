import React, {useState} from 'react';
import AdminMainTitle from "../AdminMainTitle";
import style from "./Accreditation.module.css"
import SectionTitle from "../SectionTitle/SectionTitle";
import AccreditationListItem from "./AccreditationListItem/AccreditationListItem";
import Button from "../../../Button/Button";

function AccreditationList() {
    const [saveChange, setIsChangeSave] = useState<boolean>(false)
    const onClickSaveChange = () => {
        setIsChangeSave(true)
    }
  return (
      <div className={"adminContentBackground"}>
        <AdminMainTitle titleText={"Область аккредитации"}/>
          <div className={style.contentWrap}>
              <SectionTitle titleText={"Выберите категории транспортных средств, на которые вы аттестованы:"}/>
              <div className={style.list}>
                    <div className={style.row}>
                        <AccreditationListItem itemText={"L"}/>
                        <AccreditationListItem itemText={"M1"}/>
                        <AccreditationListItem itemText={"M2"}/>
                    </div>
                  <div className={style.row}>
                      <AccreditationListItem itemText={"M3"}/>
                      <AccreditationListItem itemText={"N1"}/>
                      <AccreditationListItem itemText={"N2"}/>
                  </div>
                  <div className={style.row}>
                      <AccreditationListItem itemText={"N3"}/>
                      <AccreditationListItem itemText={"O1"}/>
                      <AccreditationListItem itemText={"O2"}/>
                  </div>
                  <div className={style.row}>
                      <AccreditationListItem itemText={"O3"}/>
                      <AccreditationListItem itemText={"O4"}/>
                  </div>
              </div>
              <Button
                  text={"Сохранить изменения"}
                  mainStyle={style.button}
                  type={"button"}
                  func={onClickSaveChange}
              />
              {saveChange && <p className={style.notification}>Все изменения успешно сохранены!</p>}
          </div>
      </div>
  );
}

export default AccreditationList;