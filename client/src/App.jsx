import React, { useEffect, useState } from "react";

// import { TestComponent } from "./components/TestComponent";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { CustomNavbar } from "./components/CustomNavbar";
import { Filters } from "./components/Filters";
import { PropertyDetails } from "./components/PropertyDetails";
import { Account } from "./components/Account";
import { LogoutPage } from "./components/LogoutPage";

function App() {
  const [loginToken, setLoginToken] = useState(null);

  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  useEffect(() => {
    setLoginToken(getToken());
  }, []);

  if (!loginToken) {
    return (
      <div>
        <Login setLoginToken={setLoginToken} />
      </div>
    );
  }

  const checkToken = () => {
    if (!getToken()) {
      setLoginToken(null);
    }
  };

  return (
    <Router>
      <div
        onClick={() => {
          checkToken();
        }}
      >
        <CustomNavbar loginToken={loginToken} setLoginToken={setLoginToken} />

        {/* <TestComponent /> */}
        <div>
          <Switch>
            {/* <Route exact path="/login">
              <Login />
            </Route> */}
            <Route exact path="/">
              <Home user={loginToken} />
            </Route>
            <Route exact path="/account/">
              <Account loginToken={loginToken} />
            </Route>
            <Route exact path="/property/:id">
              <PropertyDetails loginToken={loginToken} />
            </Route>
            <Route exact path="/logout/">
              <LogoutPage setLoginToken={setLoginToken} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
