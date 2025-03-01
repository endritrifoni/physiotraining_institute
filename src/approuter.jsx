import React, { createContext, useState } from "react";
import AppContainer from "./appcontainer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import config from 'config';


export const AppContext = createContext();

const AppRouter = () => {
  const [isAuth, setIsAuth] = useState("user");
  return (
    <Router basename={`${config.publicPath}`}>

    <AppContext.Provider value={{ isAuth, setIsAuth }}>
        <Route render={(props) => <AppContainer {...props} />} />
      </AppContext.Provider>
    </Router>
  );
};

export default AppRouter;
