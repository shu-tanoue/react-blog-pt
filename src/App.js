import React from "react";
import "./App.css";
import Home from "./containers/Home";

import Hero from "./components/Hero";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactUS from "./containers/ContactUS";
import Gallery from "./containers/gallery/index";

function App() {
  const appSecret = "abc123";

  return (
    <Router>
      <div className="App">
        <Hero />

        <Route path="/" exact component={Home} />
        <Route path="/contact-us" component={ContactUS} />
        <Route path="/gallery" component={Gallery} />
      </div>
    </Router>
  );
}

export default App;
