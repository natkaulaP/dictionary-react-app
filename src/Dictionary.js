import React, {useState} from 'react';
import './Dictionary.css'
import axios from 'axios';
import Results from './Results'
import Photos from './Photos';

export default function Dictionary(props){
  const [keyword, setKeyword]=useState(props.defaultKeyword);
const[results,setResults]=useState(null)
const[loaded,setLoaded]=useState(false)
 const[photos, setPhotos] = useState(null);
function handleDictionaryResponse(response) {
setResults(response.data[0])
}
function handlePexelsResponse(response) {
setPhotos(response.data.photos);
}
function search(){
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then (handleDictionaryResponse);

    let pexelsApiKey = "563492ad6f9170000100000179f36c2a5c154c86a75a22ed41506e3d";
  let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
  let headers = { Authorization: `Bearer ${pexelsApiKey}` };
  axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
      <Photos photos={photos}/>
      </section>
    </div>
  );
}else{
  load();
  return "Loading"
}
}