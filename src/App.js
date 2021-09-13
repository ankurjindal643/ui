import Home from "./views/Home";
import { BrowserRouter, Route } from "react-router-dom";
import "../src/style.css";
import React from "react";

let App = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={Home}></Route>
      </BrowserRouter>
    </>
  );
};

export default App;
