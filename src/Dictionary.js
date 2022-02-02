import React, {useState} from 'react';
import './Dictionary.css'
export default function Dictionary(){
  const [keyword, setKeyword]=useState("");
  function search(event){
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
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