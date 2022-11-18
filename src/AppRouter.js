import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Photography from "./Photography";
import Business from "./Business";
import Music from "./Music";
import Events from "./Events";
import Home from "./Home";

function AppRouter() {
  return (
    <Router>
      {/* <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="/photography">Photography</a>
        <a href="#events">Events</a>
        <a href="#music">Music</a>
        <a href="#business">Business</a>
      </div> */}
      <div>
        <nav className="topnav">
          <ul>
            <span>
              <Link to="/">Home</Link>
            </span>
            <span>
              <Link to="/photography">Photography</Link>
            </span>
            <span>
              <Link to="/business">Business</Link>
            </span>
            <span>
              <Link to="/music">Music</Link>
            </span>
            <span>
              <Link to="/events">Events</Link>
            </span>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/business" element={<Business />} />
          <Route path="/music" element={<Music />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
