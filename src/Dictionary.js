import React from 'react';
import './Dictionary.css'
export default function Dictionary(){
  return (
    <div className="Dictionary card">
      <h1 className="Dictionary-title cyan">DICTIONARY</h1>
      <h2 className="Dictionary-question">
        What word definition you wanna search for?
      </h2>
      <input
        className="Dictionary-description d-inline-flex"
        type="text"
        placeholder="Type a word"
        autoComplete="off"
        autoFocus="on"
      />
    </div>
  );
}