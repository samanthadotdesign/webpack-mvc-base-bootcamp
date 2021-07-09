import './styles.scss';
import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';

// Array of objects from module
import file from './data.mjs';

const { items } = file;

const jsxListItems = items.map(
  (item) => (
    <li key={item.id} className="item">
      <p>
        id:
        {item.id}
      </p>
      <p>
        name:
        {item.name}
      </p>
      <p>
        description:
        {item.description}
      </p>
      <p>
        created:
        {moment(item.createdAt).fromNow()}
      </p>
      <p>
        updated:
        {moment(item.updatedAt).fromNow()}
      </p>
    </li>
  ),
);
console.log(jsxListItems);

const myEl = (
  <div>
    <h1 className="hero-text">
      Hello World
    </h1>
    <ul>
      {jsxListItems}
    </ul>
  </div>
);

/* This appends all our created elements to the page */
const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

// Render the myEl JSX element into the root element with React.
render(myEl, rootElement);
