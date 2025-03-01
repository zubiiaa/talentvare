import React from "react";
import './App.css';
import './assets/styles/global.scss';
import HomePage from "./app/pages/home-page";
import Header from "./app/core/header";


const App = () => {
  return (
    <div className="p-grid">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
