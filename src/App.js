import logo from './logo1.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://192.168.99.46/pc-team.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ab ins Wiki
        </a>
      </header>
    </div>
  );
}

export default App;
