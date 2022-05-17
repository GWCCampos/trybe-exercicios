import React from 'react';
import './App.css';

function handleClickOi() {
  console.log('Oi');
}

function handleClickTudo() {
  console.log('tudo');
}

function handleClickBem() {
  console.log('bem')
}

class App extends React.Component {
  render() {
    return (
      <div>
      <button onClick={handleClickOi}>Oi</button>
      <button onClick={handleClickTudo}>tudo</button>
      <button onClick={handleClickBem}>bem</button>
      </div>
    )
  }
}

export default App;