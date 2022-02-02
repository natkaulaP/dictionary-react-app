import './App.css';
import Dictionary from './Dictionary'; 

function App() {
  return (
    <div className="App">
      <div className="App-conteiner">
        <main className="App-Description">
          <Dictionary />
        </main>
        <footer className="link">
          <a
            href="https://github.com/natkaulaP/dictionary-react-app"
            target="_blank"
            className="contact"
            rel="noreferrer"
          >
            Open-source code by <span className="label ">Urszula Paruch</span>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
