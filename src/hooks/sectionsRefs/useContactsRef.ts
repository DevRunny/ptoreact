import { useEffect, useRef } from "react";
import { useActions } from "../useActions";

export const useContactsRef = () => {
  const contactsRef = useRef<HTMLDivElement>(null);
  const { setContactsRefAC } = useActions();

  useEffect(() => {
    setContactsRefAC(contactsRef.current);
  }, [contactsRef.current]);

  return {
    contactsRef,
  };
};
