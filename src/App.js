import { React, useState } from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import Login from "./Login";
import Tracks from "./tracks.json";

function App() {
  const tracks = Tracks.Tracks;
  const [passwordCorrect, setPasswordCorrect] = useState(false);
  return (
    <div className="App">
      <header>
        <div className="container container-flex">
          <div className="App-header">
            <h1>2B;Cont'd</h1>
            <p className="tag-line">A blog exploring minimalism in life</p>
          </div>
          {passwordCorrect ? (
            <AppRouter tracks={tracks} />
          ) : (
            <div>
              <div className="topnav-locked-out">
                found what you were looking for.....
              </div>
              <Login onSubmit={setPasswordCorrect} />
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
