import React, { useState, useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBarApp from "./components/ui-components/header/";
import AppRouter from "./components/containers/appRouter";
import { BrowserRouter as Router } from "react-router-dom";
import mealsReducer, { initMealsState } from "store/meals-reducer/meals.reducer";
import configReducer, { initConfigState } from "store/config-reducer/config.reducer";

export const MealsContext: any = React.createContext(null);
export const ConfigurationContext: any = React.createContext(null);

function App() {
  const [stateMeals, dispatchMeals] = useReducer(mealsReducer, initMealsState);
  const [stateConfig, dispatchConfig] = useReducer( configReducer, initConfigState);

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
