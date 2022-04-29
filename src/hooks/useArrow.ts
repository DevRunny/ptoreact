import {useEffect, useRef, useState} from "react";
import {useTypedSelector} from "./useTypedSelector";
import {throttle} from "../utils/functions";

export const useArrow = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const {accreditation} = useTypedSelector(state => state.sectionRefs)
  const currentAccreditation = useRef<HTMLDivElement | null>()
  currentAccreditation.current = accreditation

  let check = () => {
    if (currentAccreditation.current && window.pageYOffset > currentAccreditation.current.offsetTop) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  check = throttle(check, 500)

  const onClickArrow = () => {
    window.scrollTo({left: 0, top: 0, behavior: "smooth"})
  }

  useEffect(() => {
    window.addEventListener("scroll", check)
    return () => {
      window.removeEventListener("scroll", check)
    }
  }, [])

  return {visible, onClickArrow}
}