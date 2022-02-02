import React, {useState} from 'react';
import './Dictionary.css'
import axios from 'axios';
import Results from './Results';

export default function Dictionary(){
  const [keyword, setKeyword]=useState("");
const[results,setResults]=useState(null)

function handleResponse(response) {
setResults(response.data[0])
}

  function search(event){
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then (handleResponse);
  }
  function updateSearch(event){
setKeyword(event.target.value);

  }
  return (
    <div className="Dictionary card">
      <h1 className="Dictionary-title">DICTIONARY</h1>
      <h2 className="Dictionary-question">
        What word definition you wanna search for?
      </h2>
      <form className="Dictionary-imput" onSubmit={search}>
        <input
          className="Dictionary-description"
          type="search"
          placeholder="Type a word"
          autoComplete="off"
          autoFocus="on"
          onChange={updateSearch}
        />
        
      </form>
      <Results results={results} />
    </div>
  );
}