import {useEffect, useRef} from "react";
import {useActions} from "../useActions";

export const useRequestRef = () => {
  const requestRef = useRef<HTMLDivElement>(null)
  const {setRequestRefAC} = useActions()

  useEffect(() => {
    setRequestRefAC(requestRef.current)
  }, [requestRef.current])

  return {requestRef}
}