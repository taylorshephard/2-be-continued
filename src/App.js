import { React, useState } from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import Login from "./Login";

function App() {
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
            <AppRouter />
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
