import React from 'react';
import NavBar from "../NavBar/NavBar";
import About from "../About/About";
import Accreditation from "../Accreditation/Accreditation";
import Documentation from "../Documentation/Documentation";
import RequestSection from "../RequestSection/RequestSection";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";
import ArrowToTop from "../ArrowToTop/ArrowToTop";
import {useFetchData} from "../../hooks/useFetchData";
import {Outlet} from "react-router-dom";

function Main() {
  const fetching = useFetchData()
  return (
      <div>
        <NavBar />
        <About />
        <Accreditation />
        <Documentation />
        <RequestSection />
        <Contacts />
        <Footer />
        <ArrowToTop />
        <Outlet />
      </div>
  );
}

export default Main;