import {Route, Routes} from "react-router-dom";
import {routes, RoutesName} from "../routes";
import Main from "./Main/Main";
import AdminPanel from "./AdminPanel/AdminPanel";
import NotificationModal from "./AdminPanel/NotificationModal/NotificationModal";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {ErrorNotFound} from "./ErrorBoundary/ErrorNotFound/ErrorNotFound";
import {Helmet} from "react-helmet";
import React from "react";
import {adminPanelImages} from "../utils/adminPanelRoutesImages";
import Privacy from "./Privacy/Privacy";
import LoginForm from "./LoginForm/LoginForm";
import DialogModal from "./AdminPanel/DialogModal/DialogModal";


function App() {

  const {responseModal} = useTypedSelector(state => state.modals)

  return (
      <div className="App">
        <Routes>
          <Route path={RoutesName.PRIVACY} element={
            <>
              <Helmet>
                <title>Политика конфиденциальности</title>
                <link rel="icon" href="/favicon.svg" />
              </Helmet>
              <Privacy />
            </>
          } />
          <Route path={RoutesName.LOGIN} element={
            <>
              <Helmet>
                <title>Вход в панель управления</title>
                <link rel="icon" href="/favicon.svg" />
              </Helmet>
              <LoginForm />
            </>
          } />
          {routes.map((route, index) => {
            if (route.path === RoutesName.SEND) {
              return <Route key={index} path={RoutesName.MAIN} element={
                <>
                  <Helmet>
                    <title>ООО «Делюкс-ПТО»</title>
                    <link rel="icon" href="/favicon.svg" />
                  </Helmet>
                  <Main />
                </>
              }>
                <Route path={route.path} element={
                  <>
                    <Helmet>
                      <title>Заявка на прохождение ТО</title>
                    </Helmet>
                    <route.component />
                  </>
                } />
              </Route>
            } else if (route.path === RoutesName.ADMIN) {
              return <Route key={index} path={RoutesName.ADMIN + "/*"} element={
                <>
                  <Helmet>
                    <title>Панель управления ENDEL</title>
                    <link rel="icon" href={adminPanelImages.endelIcon.src} />
                  </Helmet>
                  <AdminPanel />
                  <NotificationModal isActive={responseModal.isActive} type={"response"}>
                    {responseModal.message}
                    <img src={responseModal.srcIcon} alt="responseModal" />
                  </NotificationModal>
                  <DialogModal />
                </>
              }>
              </Route>
            } else {
              return <Route key={index}
                            path={route.path}
                            element={<route.component />} />
            }
          })}
          <Route path="*" element={
            <>
              <Helmet>
                <title>Страница не найдена</title>
              </Helmet>
              <ErrorNotFound errorInfo={"404"} />
            </>
          } />
        </Routes>
      </div>
  );
}

export default App;
