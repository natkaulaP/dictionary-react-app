import React  from 'react';
import Synonyms from './Synonyms'
import './Meaning.css'
export default function Meaning(props ){

  return (
    <div className="Meaning">
      <h4>{props.meaning.part0fSpeech}</h4>
      {props.meaning.definitions.map(function(definition,index){
      return (
      <div key={index}>
        <div>
          <strong>Definition: </strong>{definition.definition}
          <br/>
          <strong>Example: </strong>
        <em>{definition.example}</em>
       <Synonyms synonyms={definition.synonyms}/>
      </div>
      </div> )
      })}
     
    </div>
  );
}
