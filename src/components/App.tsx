import React from 'react';
import NavBar from "./NavBar/NavBar";
import About from "./About/About";
import Accreditation from "./Accreditation/Accreditation";
import Documentation from "./Documentation/Documentation";
import RequestSection from "./RequestSection/RequestSection";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import {useFetchData} from "../hooks/useFetchData";


function App() {

  const fetching = useFetchData()

  if (fetching.isFetch) {
    return (
        <div className="App">
          <NavBar />
          <About />
          <Accreditation/>
          <Documentation/>
          <RequestSection/>
          <Contacts />
          <Footer />
        </div>
    );
  }

  return (
      <div>Загрузка всех данных...</div>
  )
}

export default App;
