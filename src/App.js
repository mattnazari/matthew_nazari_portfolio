import React from "react";
import "./App.scss";
import Header from "./comps/Header";
import Footer from "./comps/Footer";
import Main from "./comps/Main";
import Washare from "./comps/Washare";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/Washare" exact component={Washare} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
