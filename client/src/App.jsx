import React, { useEffect, useState } from "react";

// import { TestComponent } from "./components/TestComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { CustomNavbar } from "./components/CustomNavbar";
import { Filters } from "./components/Filters";
import { PropertyDetails } from "./components/PropertyDetails";
import { Account } from "./components/Account";

function App() {
  const [loginToken, setLoginToken] = useState(null);

  const setToken = (data) => {
    sessionStorage.setItem("token", JSON.stringify(data));
  };

  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const deleteToken = () => {
    sessionStorage.removeItem("token");
  };

  console.log(getToken());

  if (!loginToken) {
    return (
      <div>
        <Login setLoginToken={setLoginToken} setToken={setToken} />
      </div>
    );
  }

  console.log(getToken());

  return (
    <Router>
      <div>
        <CustomNavbar deleteToken={deleteToken} />
        <Filters />
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
              <Account user={loginToken} />
            </Route>
            <Route exact path="/property/:id">
              <PropertyDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
