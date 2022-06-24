import React from 'react';
import {Route, Routes} from "react-router-dom";
import Settings from "../Pages/Settings/Settings";
import MessengersList from "../Pages/MessengersList/MessengersList";
import AddressesList from "../Pages/AddressesList/AddressesList";
import DocumentsList from "../Pages/DocumentsList/DocumentsList";
import AccreditationList from "../Pages/AccreditationList/AccreditationList";
import Information from "../Pages/Information/Information";
import {ErrorNotFound} from "../../ErrorBoundary/ErrorNotFound/ErrorNotFound";
import {Helmet} from "react-helmet";

function AdminRouter() {
  return (
      <>
        <Routes>
          <Route path={"/"} element={
            <>
              <Helmet>
                <title>Общая информация</title>
              </Helmet>
              <Information />
            </>
          } />
          <Route path={"accreditation"} element={
            <>
              <Helmet>
                <title>Область аккредитации</title>
              </Helmet>
              <AccreditationList />
            </>
          } />
          <Route path={"documents"} element={
            <>
              <Helmet>
                <title>Список документов</title>
              </Helmet>
              <DocumentsList />
            </>
          } />
          <Route path={"address"} element={
            <>
              <Helmet>
                <title>Адрес ПТО</title>
              </Helmet>
              <AddressesList />
            </>
          } />
          <Route path={"messengers"} element={
            <>
              <Helmet>
                <title>Мессенджеры</title>
              </Helmet>
              <MessengersList />
            </>
          } />
          <Route path={"settings"} element={
            <>
              <Helmet>
                <title>Настройки</title>
              </Helmet>
              <Settings />
            </>
          } />
          <Route path={"*"} element={
            <>
              <Helmet>
                <title>Страница не найдена</title>
              </Helmet>
              <ErrorNotFound errorInfo={"404"} />
            </>} />
        </Routes>
      </>
  );
}

export default AdminRouter;