import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    // documentation: https://api.dictionaryapi.dev/api/v2/entries/en/<word>
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary mb-4 p-2">
      <section className="row">
        <form onSubmit={search}>
          <input
            type="Search"
            onChange={handleKeywordChange}
            placeholder="Search a word..."
            className="col-10"
          />
          <button type="submit" className="col-2">
            Search
          </button>
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
