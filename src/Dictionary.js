import React, {useState} from 'react';
import './Dictionary.css'
import axios from 'axios';
export default function Dictionary(){
  const [keyword, setKeyword]=useState("");

function handleResponse(response) {
  console.log(response.data[0])
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
      <h1 className="Dictionary-title cyan">DICTIONARY</h1>
      <h2 className="Dictionary-question">
        What word definition you wanna search for?
      </h2>
       <form onSubmit={search}>
      <input
        className="Dictionary-description "
        type="search"
        placeholder="Type a word"
        autoComplete="off"
        autoFocus="on"
        onChange={updateSearch}
      />
      </form>
    </div>
  );
}