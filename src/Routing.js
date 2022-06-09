import React from "react";
import { Route } from "react-router-dom";

function Home() {
  return <div>Home</div>;
}

function Login() {
  return <div>Login</div>;
}

function PageNotFound() {
  return <div>Page Not Found!</div>;
}

function Routing() {
  return (
    <>
      <div className="border-bg-2 mb-4">
        <button className="bh-blue-500 mr-4"></button>
        <button className="bh-blue-500"></button>
      </div>
      <Route path="/home">
        <Home></Home>
      </Route>
    </>
  );
}

export default Routing;
