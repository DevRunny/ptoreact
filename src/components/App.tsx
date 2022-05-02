import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "./Main/Main";
import LoginForm from "./LoginForm/LoginForm";
import AdminPanel from "./AdminPanel/AdminPanel";
import SendForm from "./SendForm/SendForm";


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="send" element={<SendForm />} />
          </Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
  );
}

export default App;
