import {useEffect, useState} from 'react';
import AdminMainTitle from "../AdminMainTitle";
import style from "./MessengersList.module.css"
import SectionTitle from "../SectionTitle/SectionTitle";
import {InputType} from "../AdminFormItem/AdminFormItem";
import {FormItemWithNotation} from "../../../../HOCs/AdminFormItem";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {useActions} from "../../../../hooks/useActions";
import Preloader from "../../../Preloader/Preloader";
import ServiceFieldButton from "../ServiceFieldButton/ServiceFieldButton";
import {adminPanelImages} from "../../../../utils/adminPanelRoutesImages";
import {useAuth} from "../../../../hooks/useAuth";
import {MessengersName} from "../../../../types/messengers";

function MessengersList() {
  const [loading, setLoading] = useState<boolean>(false)
  const {messengers} = useTypedSelector(state => state.messengers)
  const {fetchMessengersAC, deleteMessenger, setValueMessenger} = useActions()
  const {redirect} = useAuth()

  const onClickSave = (id: string, inputValue: string, inputType?: InputType) => {
    setValueMessenger(id, inputValue)
  }

  const onClickDelete = (id: string) => {
    deleteMessenger(id)
  }

  const textNotation = (messengerName: string) => {
    switch (messengerName) {
      case MessengersName.TELEGRAM:
        return "@username"
      case MessengersName.VK:
        return "username"
      case MessengersName.WHATSAPP:
        return "+79123456789"
      case MessengersName.VIBER:
        return "+79123456789"
      default:
        return ""
    }
  }

  const fetch = async () => {
    setLoading(true)
    await fetchMessengersAC()
    setLoading(false)

  }

  useEffect(() => {
    redirect()
    fetch()
  }, [])

  if (loading) return <Preloader size={"big"} styleLoader={"adminLoader"} heightWrapLoader={"fullHeight"} />

  return (
      <div className={"adminContentBackground"}>
        <AdminMainTitle titleText={"Способы обратной связи"} />
        <div className={style.contentWrap}>
          <SectionTitle titleText={"Список мессенджеров:"} />
          <div className={style.itemWrap}>
            <div className={style.messengersTrue}>
              {messengers.map(messenger => {
                if (messenger.value !== "") {
                  return <FormItemWithNotation
                      textNotation={textNotation(messenger.messengerName)}
                      styleNotation={style.notation}
                      mainStyle={"formItem"}
                      inputStyle={style.inputMessenger}
                      inputType={"text"}
                      value={messenger.value}
                      id={messenger.id}
                      onClickSaveFunc={onClickSave}
                      onClickDeleteFunc={onClickDelete}
                      labelText={`${messenger.messengerName}:`}
                      isExample={true}
                      icon={messenger.icon}
                      disabled={!(messenger.value === messenger.messengerName)}
                  />
                }
              })}
            </div>
            <div className={style.messengersFalse}>
              {messengers.map(messenger => {
                if (messenger.value === "") {
                  return <ServiceFieldButton
                      buttonStyle={style.addMessenger}
                      textButton={`Добавить ${messenger.messengerName}`}
                      onClickFunc={() => {
                        setValueMessenger(messenger.id, messenger.messengerName)
                      }}
                      icon={adminPanelImages.plusButton.green.src} />
                }
              })}
            </div>
          </div>
        </div>
      </div>
  );
}

export default MessengersList;