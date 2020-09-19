import React from "react";
import "./App.css";
import NavBarApp from "./components/ui-components/header/";
import AppRouter from "./components/containers/appRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <NavBarApp />
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
