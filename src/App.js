import React from "react";
import { Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
