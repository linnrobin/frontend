import React from "react";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
