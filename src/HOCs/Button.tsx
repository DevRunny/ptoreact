import React from "react";
import Button, {IButton} from "../components/Button/Button";
import {useTypedSelector} from "../hooks/useTypedSelector";

export enum AboutButtonText {
  request = "Записаться на ТО",
  contacts = "Как нас найти"
}

const aboutButtons = (Component: React.ComponentType<IButton>) => {
  return (props: Omit<IButton, "func">) => {
    switch (props.text) {
      case AboutButtonText.contacts:
        const {contacts} = useTypedSelector(state => state.sectionRefs)
        const goToContacts = () => {
          return contacts && window.scrollTo({top: contacts.offsetTop, behavior: "smooth"})
        }
        return (
            <Component text={props.text} func={goToContacts} mainStyle={props.mainStyle} />
        )
      case AboutButtonText.request:
        const {request} = useTypedSelector(state => state.sectionRefs)
        const goToRequest = () => {
          return request && window.scrollTo({top: request.offsetTop, behavior: "smooth"})
        }
        return (
            <Component text={props.text} func={goToRequest} mainStyle={props.mainStyle} />
        )
      default:
        const log = () => console.log("sdsd")
        return (
            <Component text={props.text} func={log} mainStyle={props.mainStyle} />
        )
    }
  }
}
//
// const documentationButtons = (Component: React.ComponentType<IButton>) => {
//   return () => {
//     return (
//         <Component></Component>
//     )
//   }
// }
//
// const requestButtons = (Component: React.ComponentType<IButton>) => {
//   return () => {
//     return (
//         <Component></Component>
//     )
//   }
// }

export const ButtonWithGoTo = aboutButtons(Button)