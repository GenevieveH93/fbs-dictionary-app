import React from "react";
import "./App.css";
import logo from "./media/logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={logo}
            alt="fern bay studio logo"
            className="img-fluid logo m-4 p-2"
          />
        </header>
        <main className="container">
          <Dictionary />
        </main>
        <footer className="text-center footer">
          Coded by{" "}
          <a
            href="https://www.instagram.com/fernbaystudio/"
            target="blank"
            rel="noopener noreferrer"
          >
            Fern Bay Studio
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/GenevieveH93/fbs-dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced
          </a>
          . Hosted on Netlify.
        </footer>
      </div>
    </div>
  );
}

export default App;
