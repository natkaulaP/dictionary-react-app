import './App.css';
import Dictionary from './Dictionary'; 
;
function App() {
  return (
    <div className="App">
      <div className="App-conteiner">
        <main className="App-Description">
          <Dictionary defaultKeyword="home" />
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
          <a
            href="https://eloquent-clarke-5a62c6.netlify.app"
            target="_blank"
            className="contact"
            rel="noreferrer"
          > hosted on <span className="label ">Netlify</span></a>
        </footer>
      </div>
    </div>
  );
}

export default App;
