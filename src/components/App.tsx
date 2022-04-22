import React from 'react';
import NavBar from "./NavBar/NavBar";
import About from "./About/About";
import Accreditation from "./Accreditation/Accreditation";
import Documentation from "./Documentation/Documentation";
import RequestSection from "./RequestSection/RequestSection";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";


function App() {
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
