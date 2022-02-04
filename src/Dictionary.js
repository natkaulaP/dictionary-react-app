import React, {useState} from 'react';
import './Dictionary.css'
import axios from 'axios';
import Results from './Results';

export default function Dictionary(props){
  const [keyword, setKeyword]=useState(props.defaultKeyword);
const[results,setResults]=useState(null)
const[loaded,setLoaded]=useState(false)

function handleResponse(response) {
setResults(response.data[0])
}
function search(){
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then (handleResponse);
  }
  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  function updateSearch(event){
setKeyword(event.target.value);
  }
  function load (){
    setLoaded(true);
    search()
  }
  if( loaded){
  return (
    <div className="Dictionary">
      <section >
      <h1 className="Dictionary-title">DICTIONARY</h1>
      <h2 className="Dictionary-question">
        What word definition you wanna search for?
      </h2>
      <form  onSubmit={handleSubmit}>
        <input
        defaultValue={props.defaultKeyword}
          type="search"
          placeholder="Type a word"
          autoComplete="off"
          autoFocus="on"
          onChange={updateSearch}
        />
        <div className="hint">
          suggested words: planet, tree, telepathic... 
          </div>
      </form>
      </section>
      <section >
      <Results results={results} />
      </section>
    </div>
  );
}else{
  load();
  return "Loading"
}
}