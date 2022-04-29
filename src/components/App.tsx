import React, {useRef} from 'react';
import NavBar from "./NavBar/NavBar";
import About from "./About/About";
import Accreditation from "./Accreditation/Accreditation";
import Documentation from "./Documentation/Documentation";
import RequestSection from "./RequestSection/RequestSection";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import {useFetchData} from "../hooks/useFetchData";
import {SectionRefsType, SectionRefs} from "../Context/SectionRefs";


function App() {

  const fetching = useFetchData()

  const documentationRef = useRef<React.RefObject<HTMLInputElement> | null>(null)
  const requestRef = useRef<React.RefObject<HTMLInputElement> | null>(null)
  const contactsRef = useRef<React.RefObject<HTMLInputElement> | null>(null)
  const accreditationRef = useRef<React.RefObject<HTMLInputElement> | null>(null)

  const sectionRef: SectionRefsType = {
    accreditation: accreditationRef.current,
    contacts: contactsRef.current,
    documentation: documentationRef.current,
    request: requestRef.current
  }

  if (fetching.isFetch) {
    return (
        <div className="App">
          <SectionRefs.Provider value={sectionRef}>
            <NavBar />
          </SectionRefs.Provider>
          <About />
          <Accreditation accreditationRef={accreditationRef.current} />
          <Documentation documentationRef={documentationRef.current} />
          <RequestSection requestRef={requestRef.current} />
          <Contacts contactsRef={contactsRef.current} />
          <SectionRefs.Provider value={sectionRef}>
            <Footer />
          </SectionRefs.Provider>
        </div>
    );
  }

  return (
      <div>Загрузка всех данных...</div>
  )
}

export default App;
