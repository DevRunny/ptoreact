import React from "react";
import Button, {IButton} from "../components/Button/Button";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useNavigate} from "react-router-dom";
import {RoutesName} from "../routes";

export enum AboutButtonText {
  request = "Записаться на ТО",
  contacts = "Как нас найти"
}

const aboutButtons = (Component: React.ComponentType<IButton>) => {
  return (props: Omit<IButton, "func" | "type">) => {
    switch (props.text) {
      case AboutButtonText.contacts:
        const {contacts} = useTypedSelector(state => state.sectionRefs)
        const goToContacts = () => {
          return contacts && window.scrollTo({top: contacts.offsetTop, behavior: "smooth"})
        }
        return (
            <Component text={props.text} func={goToContacts} mainStyle={props.mainStyle} type="button" />
        )
      case AboutButtonText.request:
        const navigate = useNavigate()
        const goToSendForm = () => {
          navigate(RoutesName.SEND)
        }
        return (
            <Component text={props.text} func={goToSendForm} mainStyle={props.mainStyle} type="button" />
        )
      default:
        return (
            <Component text={props.text} mainStyle={props.mainStyle} type="button" />
        )
    }
  }
}

const requestButtons = (Component: React.ComponentType<IButton>) => {
  return (props: Omit<IButton, "func" | "type">) => {
    const navigate = useNavigate()
    const goToSendForm = () => {
      navigate(RoutesName.SEND)
    }
    return (
        <Component text={props.text} type={"button"} mainStyle={props.mainStyle} func={goToSendForm} />
    )
  }
}

const documentationButtons = (Component: React.ComponentType<IButton>) => {
  return (props: Omit<IButton, "func" | "type">) => {
    const showDocument = () => {
      console.log("Документ")
    }
    return (
        <Component text={props.text} func={showDocument} mainStyle={props.mainStyle} type={"button"} />
    )
  }
}


export const ButtonWithGoTo = aboutButtons(Button)
export const ButtonWithSendForm = requestButtons(Button)
export const ButtonWithDocument = documentationButtons(Button)