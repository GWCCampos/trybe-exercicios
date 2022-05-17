import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    numClickBtUm: 0,
    numClickBtDois: 0,
    numClickBtTres: 0,
  }

  handleClickUm = () => {
    this.setState((prevState, ...props) => ({
      numClickBtUm: prevState.numClickBtUm +1,
    }))
  };
  
  handleClickDois = () => {
    this.setState((prevState, ...props) => ({
      numClickBtDois: prevState.numClickBtDois +1,
    }))
  };
  
  handleClickTres = () => {
    this.setState((prevState, ...props) => ({
      numClickBtTres: prevState.numClickBtTres +1,
    }))
  };
  
  render() {
    return (
      <div>
      <button onClick={this.handleClickUm}>{this.state.numClickBtUm}</button>
      <button onClick={this.handleClickDois}>{this.state.numClickBtDois}</button>
      <button onClick={this.handleClickTres}>{this.state.numClickBtTres}</button>
      </div>
    )
  }
}

export default App;