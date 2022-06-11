import React, {useEffect, useState} from 'react';
import AdminMainTitle from "../AdminMainTitle";
import style from "./MessengersList.module.css"
import SectionTitle from "../SectionTitle/SectionTitle";
import {InputType} from "../AdminFormItem/AdminFormItem";
import {FormItemWithNotation} from "../../../../HOCs/AdminFormItem";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {useActions} from "../../../../hooks/useActions";
import Preloader from "../../../Preloader/Preloader";
import AddFieldButton from "../AddFieldButton/AddFieldButton";
import {adminPanelImages} from "../../../../utils/adminPanelRoutesImages";

function MessengersList() {
  const [loading, setLoading] = useState<boolean>(false)
  const {telegram, whatsapp, viber, vk} = useTypedSelector(state => state.messengers)
  const {fetchMessengersAC, deleteMessenger} = useActions()

  const onClickSave = (id: string, inputValue: string, inputType?: InputType) => {
    console.log(inputValue)
  }

  const onClickDelete = () => {

  }

  const fetch = async () => {
    setLoading(true)
    await fetchMessengersAC()
    setLoading(false)

  }

  useEffect(() => {
    fetch()
  }, [])

  if (loading) return <Preloader size={"big"} styleLoader={"adminLoader"} />


  return (
      <div className={"adminContentBackground"}>
        <AdminMainTitle titleText={"Способы обратной связи"} />
        <div className={style.contentWrap}>
          <SectionTitle titleText={"Список мессенджеров:"} />
          <div className={style.itemWrap}>
            {
              telegram === ""
                  ?
                  <AddFieldButton
                      buttonStyle={style.addMessenger}
                      textButton={"Добавить Telegram"}
                      onClickFunc={() => {
                        console.log("Добавлен элемент")
                      }}
                      icon={adminPanelImages.plusButton.green.src} />
                  :
                  <FormItemWithNotation
                      textNotation={"@username"}
                      styleNotation={style.notation}
                      mainStyle={"formItem"}
                      inputStyle={style.inputMessenger}
                      inputType={"text"}
                      value={telegram}
                      id={"1"}
                      onClickSaveFunc={onClickSave}
                      onClickDeleteFunc={onClickDelete}
                      labelText={"Telegram:"}
                      isExample={true} />
            }
            {
              whatsapp === ""
                  ?
                  <AddFieldButton
                      buttonStyle={style.addMessenger}
                      textButton={"Добавить Whatsapp"}
                      onClickFunc={() => {
                        console.log("Добавлен элемент")
                      }}
                      icon={adminPanelImages.plusButton.green.src} />
                  :
                  <FormItemWithNotation
                      textNotation={"+79123456789"}
                      styleNotation={style.notation}
                      mainStyle={"formItem"}
                      inputStyle={style.inputMessenger}
                      inputType={"text"}
                      value={whatsapp}
                      id={"2"}
                      onClickSaveFunc={onClickSave}
                      onClickDeleteFunc={onClickDelete}
                      labelText={"WhatsApp:"}
                      isExample={true} />
            }

            {
              vk === ""
                  ?
                  <AddFieldButton
                      buttonStyle={style.addMessenger}
                      textButton={"Добавить VK (Вконтакте)"}
                      onClickFunc={() => {
                        console.log("Добавлен элемент")
                      }}
                      icon={adminPanelImages.plusButton.green.src} />
                  :
                  <FormItemWithNotation
                      textNotation={"username"}
                      styleNotation={style.notation}
                      mainStyle={"formItem"}
                      inputStyle={style.inputMessenger}
                      inputType={"text"}
                      value={vk}
                      id={"3"}
                      onClickSaveFunc={onClickSave}
                      onClickDeleteFunc={onClickDelete}
                      labelText={"VK (Вконтакте):"}
                      isExample={true} />
            }

            {
              viber === ""
                  ?
                  <AddFieldButton
                      buttonStyle={style.addMessenger}
                      textButton={"Добавить Viber"}
                      onClickFunc={() => {
                        console.log("Добавлен элемент")
                      }}
                      icon={adminPanelImages.plusButton.green.src} />
                  :
                  <FormItemWithNotation
                      textNotation={"+79123456789"}
                      styleNotation={style.notation}
                      mainStyle={"formItem"}
                      inputStyle={style.inputMessenger}
                      inputType={"text"}
                      value={viber}
                      id={"4"}
                      onClickSaveFunc={onClickSave}
                      onClickDeleteFunc={onClickDelete}
                      labelText={"Viber:"}
                      isExample={true} />
            }
          </div>
        </div>
      </div>
  );
}

export default MessengersList;