import "./App.css";
import React from "react";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import New from "./components/New";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/new">
          <New></New>
        </Route>

        <Redirect from="/" exact to="/home"></Redirect>
        <Route>
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
