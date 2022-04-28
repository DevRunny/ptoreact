import React, {createContext} from "react";

export type SectionRefsType = {
  accreditation: React.RefObject<HTMLInputElement> | null
  documentation: React.RefObject<HTMLInputElement> | null
  request: React.RefObject<HTMLInputElement> | null
  contacts: React.RefObject<HTMLInputElement> | null
}

const sectionRef: SectionRefsType = {
  contacts: null,
  accreditation: null,
  documentation: null,
  request: null
}

export const SectionRefs = createContext<SectionRefsType | null>(sectionRef)