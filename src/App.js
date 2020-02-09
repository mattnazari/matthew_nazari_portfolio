import React from "react";
import "./App.scss";
import Header from "./comps/Header";
import Footer from "./comps/Footer";
import Main from "./comps/Main";
import Card from "./comps/Card";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
