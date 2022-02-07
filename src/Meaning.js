import React  from 'react';
import Synonyms from './Synonyms'
import './Meaning.css'
export default function Meaning(props ){

  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function(definition,index){
      return (
      <div key={index}>
        <div className="definition">
          Definition: {definition.definition}
          </div>
          <div className="example">Example: 
        <em>{definition.example}</em>
        </div>
        <br/>
       <Synonyms synonyms={definition.synonyms}/>
       <br/>
      </div>
       )
      })}
     
    </div>
  );
}
