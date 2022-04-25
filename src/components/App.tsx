import React, {useEffect} from 'react';
import NavBar from "./NavBar/NavBar";
import About from "./About/About";
import Accreditation from "./Accreditation/Accreditation";
import Documentation from "./Documentation/Documentation";
import RequestSection from "./RequestSection/RequestSection";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import axios from "axios";


function App() {
  useEffect(() => {
    const response = axios("https://6266931b63e0f38256840bce.mockapi.io/about")
    response.then(data => data).then(data => console.log(data.data))
  }, [])
  return (
      <div className="App">
        <NavBar />
        <About />
        <Accreditation />
        <Documentation />
        <RequestSection />
        <Contacts />
        <Footer />
      </div>
  );
}

export default App;
