import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Photography from "./Photography";
import Business from "./Business";
import Music from "./Music";
import Events from "./Events";
import Home from "./Home";

function AppRouter(props) {
  return (
    <Router>
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
          <Route path="/music" element={<Music tracks={props.tracks} />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
