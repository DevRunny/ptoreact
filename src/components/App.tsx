import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes, RoutesName} from "../routes";
import Main from "./Main/Main";


function App() {
  return (
      <div className="App">
        <Routes>
          {routes.map((route, index) => {
            if (route.path === RoutesName.SEND) {
              return <Route path={RoutesName.MAIN} element={<Main />}>
                <Route path={route.path} element={<route.component />} />
              </Route>
            } else {
              return <Route key={index}
                            path={route.path}
                            element={<route.component />} />
            }
          })}
        </Routes>
      </div>
  );
}

export default App;
