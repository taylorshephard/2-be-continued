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
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/photography">
                    Photography
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/music">
                    Music
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/events">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
          </div>
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
