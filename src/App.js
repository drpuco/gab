import logo from './logo1.svg';
import './App.css';
import Clock from './index.js';


function App() {
  return (
    <div className="App">
     <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Willkommen beim PC-Recycling.
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
