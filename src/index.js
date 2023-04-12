import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Welcome(props){
  return <h1>Hello, {props.name}.</h1>
}
const element = <Welcome name='UserX' />
class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {date:new Date()}
    }
    /* Ticker anstellen wenn geladen */
    componentDidMount(){
      this.ticker = setInterval(()=> this.tick(), 1000);
    }
    /* nicht vergessen den Ticker abzustellen */
    componentWillUnmount(){
      clearInterval(this.ticker);
    }
  tick(){
    this.setState({
      date : new Date()
    })
  }

  render(){
    return (
      <div>
       <h1>Aktuelle Uhrzeit : {this.state.date} </h1>
      </div>
    );
  }
}
//ReactDOM.render(Clock, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default Clock;
