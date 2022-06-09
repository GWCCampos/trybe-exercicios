import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    numClickBtUm: 0,
    colorBtUm: 'red',
    numClickBtDois: 0,
    colorBtDois: 'blue',
    numClickBtTres: 0,
    colorBtTres: 'yellow',
    colorIsOdd: 'green',
  }

  handleClickUm = (event) => {
    this.setState((prevState, ...props) => ({
      numClickBtUm: prevState.numClickBtUm +1,
    }), () => {
    const { target: { style: { backgroundColor } } } = event;
    console.log( backgroundColor )})
    };
  
  handleClickDois = (event) => {
    this.setState((prevState, ...props) => ({
      numClickBtDois: prevState.numClickBtDois +1,
    }), () => {
      const { target: { style: { backgroundColor } } } = event;
      console.log( backgroundColor )})
    };
  
  handleClickTres = (event) => {
    this.setState((prevState, ...props) => ({
      numClickBtTres: prevState.numClickBtTres +1,
    }), () => {
      const { target: { style: { backgroundColor } } } = event;
      console.log( backgroundColor )
      })
    };
  
  render() {
    const {state: {numClickBtUm, numClickBtDois, numClickBtTres, colorBtUm,
    colorBtDois, colorBtTres, colorIsOdd}, handleClickUm, handleClickDois, handleClickTres
    } = this;
    return (
      <div>
        <button 
          onClick={handleClickUm}
          style={ numClickBtUm % 2 === 0 ? {backgroundColor: colorIsOdd,}
          : {backgroundColor: colorBtUm,}}
        >
          {numClickBtUm}
        </button>
        <button 
          onClick={handleClickDois}
          style={numClickBtDois % 2 === 0 ? {backgroundColor: colorIsOdd,}
          : {backgroundColor: colorBtDois, color: 'white'}}
        >
          {numClickBtDois}
        </button>
        <button 
          onClick={handleClickTres}
          style={ numClickBtTres % 2 === 0 ? {backgroundColor: colorIsOdd,}
          : {backgroundColor: colorBtTres,}}
        >
          {numClickBtTres}
        </button>
      </div>
    )
  }
}

export default App;