import React from 'react';
import {Route, Routes} from "react-router-dom";
import Settings from "../Pages/Settings/Settings";
import MessengersList from "../Pages/MessengersList/MessengersList";
import AddressesList from "../Pages/AddressesList/AddressesList";
import DocumentsList from "../Pages/DocumentsList/DocumentsList";
import AccreditationList from "../Pages/AccreditationList/AccreditationList";
import Information from "../Pages/Information/Information";
import {ErrorNotFound} from "../../ErrorBoundary/ErrorNotFound/ErrorNotFound";

function AdminRouter() {
  return (
      <>
        <Routes>
          <Route path={"/"} element={<Information />} />
          <Route path={"accreditation"} element={<AccreditationList />} />
          <Route path={"documents"} element={<DocumentsList />} />
          <Route path={"address"} element={<AddressesList />} />
          <Route path={"messengers"} element={<MessengersList />} />
          <Route path={"settings"} element={<Settings />} />
          <Route path={"*"} element={<ErrorNotFound errorInfo={"404"}/>}/>
        </Routes>
      </>
  );
}

export default AdminRouter;