import React from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Redirecting from "./components/Redirecting";
import './App.css';

import Home from "./pages/Home";
import NotFound from "./pages/404";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="ui container" style={{ position: "relative", minHeight: '900px' }}>
        <Switch>
          <Router exact path="/">
            <Home />
          </Router>
          <Router path="/discord">
            <Redirecting to="https://discord.gg/g2VZHsEuQ4" />
          </Router>
          <Router path="/tos">
            <Redirecting to="/tos" />
          </Router>
          {/*404*/}
          <NotFound />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
