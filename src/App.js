import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Main from "./comps/Main";
import Washare from "./comps/Washare";
import About from "./comps/About";
import Contact from "./comps/Contact";
import Fitly from "./comps/Fitly";
import Squeaker from "./comps/Squeaker";
import Quikpix from "./comps/Quikpix";
import PortfolioWebsite from "./comps/Portfolio";
import Calculator from "./comps/Calculator";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/Washare" exact component={Washare} />
          <Route path="/About" exact component={About} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Fitly" exact component={Fitly} />
          <Route path="/Squeaker" exact component={Squeaker} />
          <Route path="/Quikpix" exact component={Quikpix} />
          <Route path="/PortfolioWebsite" exact component={PortfolioWebsite} />
          <Route path="/Calculator" exact component={Calculator} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
