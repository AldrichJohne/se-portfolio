import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
        <React.Fragment>
          <Navbar />
        </React.Fragment>
    </Router>
  );
}

export default App;
