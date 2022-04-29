import {createContext, MutableRefObject} from "react";

export type SectionRefsType = {
  accreditation: HTMLDivElement | null
  documentation: HTMLDivElement | null
  request: HTMLDivElement | null
  contacts: HTMLDivElement | null
}

export const SectionRefs = createContext<MutableRefObject<HTMLDivElement | null> | null>(null)