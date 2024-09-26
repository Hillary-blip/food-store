import Header from "./component/Header";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <header >
        <Header />
      </header>
    </div>
  );
}

export default App;
