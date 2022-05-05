import {useEffect, useRef} from "react";
import {useActions} from "../useActions";

export const useAccreditationRef = () => {
  const accreditationRef = useRef<HTMLDivElement>(null);
  const {setAccreditationRefAC} = useActions();

  useEffect(() => {
    setAccreditationRefAC(accreditationRef.current);
  }, [accreditationRef.current]);

  return {accreditationRef};
};
