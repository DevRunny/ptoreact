import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes, RoutesName} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";


function App() {
  const {isAuth} = useTypedSelector(state => state.auth)
  return (
      <div className="App">
        <Routes>
          {isAuth ? privateRoutes.map((route, index) =>
                  <Route path={route.path}
                         element={<route.component />}
                         key={index} />)
              :
              publicRoutes.map((route, index) =>
                  <Route path={route.path}
                         element={<route.component />}
                         key={index} />
              )
          }

          {isAuth ? <Route path={RoutesName.LOGIN} element={<Navigate to={RoutesName.ADMIN} />} /> :
              <Route path={RoutesName.ADMIN} element={<Navigate to={RoutesName.LOGIN} />} />}

          <Route path={"*"} element={<div>Error 404 Not Found</div>} />
          {/*<Route path={RoutesName.MAIN} element={<Main />}>*/}
          {/*  <Route path={RoutesName.SEND} element={<SendForm />} />*/}
          {/*</Route>*/}
          {/*<Route path={RoutesName.LOGIN} element={<LoginForm />} />*/}
          {/*<Route path={RoutesName.ADMIN} element={<AdminPanel />} />*/}
        </Routes>
      </div>
  );
}

export default App;
