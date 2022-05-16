import './App.css'
import PokemonComponent from './PokemonComponent';
import pokemons from './data';

function App() {
  return (
    <div>
      <h1 className='titulo'>Pokedex</h1>
      <PokemonComponent lista={pokemons}/>
    </div>
  );
}

export default App;
