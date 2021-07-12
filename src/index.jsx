import './styles.scss';
import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';

// Convert into objects from raw JSON so we don't need JSON.parse()
// Object of objects
import data from './pokemon.json';

console.log(data);
const pokemonKeys = Object.keys(data);

const pokemonNames = [];
// Getting the names of the pokemon
for (let index = 0; index < 20; index += 1) {
  pokemonNames.push(pokemonKeys[index]);
}

// Pokemon Component
function Pokemon({ name }) {
  return (
    <div>
      <h1>{ name }</h1>
    </div>
  );
}

// For every pokemon in the list, create a component with the pokemon name
// Using the prop here to change the pokemon name
const pokemonItems = pokemonKeys.map((pokemon) => <Pokemon name={pokemon} />);

const myEl = (
  <div>
    {pokemonItems}
  </div>
);

/* This appends all our created elements to the page */
const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

// Render the myEl JSX element into the root element with React.
render(myEl, rootElement);
