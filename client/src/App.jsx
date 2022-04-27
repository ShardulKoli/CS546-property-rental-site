import React, { useState } from "react";

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

  if (!loginToken) {
    return (
      <div>
        <Login setLoginToken={setLoginToken} />
      </div>
    );
  }

  return (
    <Router>
      <div>
        <CustomNavbar />
        <Filters />
        {/* <TestComponent /> */}
        <div>
          <Switch>
            {/* <Route exact path="/login">
              <Login />
            </Route> */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/account/:id">
              <Account name="qweqweqwe" />
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
