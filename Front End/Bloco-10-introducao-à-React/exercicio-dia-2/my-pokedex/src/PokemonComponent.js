import  React , { Component } from "react";
import './Pokemon.css';

class PokemonComponent extends Component {
  render() {
    const {lista} = this.props; 
    return (
      lista.map((pokemon) => <div className="pokemonDiv">
        <p>{pokemon.name}</p>
        <p>{pokemon.type}</p>
        <p>{pokemon.averageWeight.value}{pokemon.averageWeight.measurementUnit}</p>
        <img className="imagem" src={pokemon.image} alt={pokemon.name}/>
      </div>)
    )
  }
}

export default PokemonComponent;