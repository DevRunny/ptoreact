import {useEffect, useRef} from "react";
import {useActions} from "../useActions";

export const useDocumentationRef = () => {
  const documentationRef = useRef<HTMLDivElement>(null);
  const {setDocumentationRefAC} = useActions();

  useEffect(() => {
    setDocumentationRefAC(documentationRef.current);
  }, [documentationRef.current]);

  return {documentationRef};
};
