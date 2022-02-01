
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-conteiner">
        <header className="App-header">
          <div className="App-card card">
            <h1 className="App-title">DICTIONARY</h1>
            <h2 className="App-question">
              What word definition you wanna search for?
            </h2>
            <input
              className="App-description"
              type="text"
              placeholder="Type a word"
              autoComplete="off"
              autoFocus="on"
            />
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
