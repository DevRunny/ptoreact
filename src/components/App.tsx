import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "./Main/Main";
import LoginForm from "./LoginForm/LoginForm";
import AdminPanel from "./AdminPanel/AdminPanel";
import SendForm from "./SendForm/SendForm";
import {RoutesName} from "../routes";


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path={RoutesName.MAIN} element={<Main />}>
            <Route path={RoutesName.SEND} element={<SendForm />} />
          </Route>
          <Route path={RoutesName.LOGIN} element={<LoginForm />} />
          <Route path={RoutesName.ADMIN} element={<AdminPanel />} />
        </Routes>
      </div>
  );
}

export default App;
