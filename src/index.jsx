import './styles.scss';
import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';

// Convert into objects from raw JSON so we don't need JSON.parse()
import file from './pokemon-example.json';

console.log(file)

// const jsxListItems = file.map(
//   (pokemon) => (
//     <li key={item.id} className="item">
//       <p>
//         id:
//         {item.id}
//       </p>
//       <p>
//         name:
//         {item.name}
//       </p>
//       <p>
//         description:
//         {item.description}
//       </p>
//       <p>
//         created:
//         {moment(item.createdAt).fromNow()}
//       </p>
//       <p>
//         updated:
//         {moment(item.updatedAt).fromNow()}
//       </p>
//     </li>
//   ),
// );
// console.log(jsxListItems);

// const myEl = (
//   <div>
//     <h1 className="hero-text">
//       Hello World
//     </h1>
//     <ul>
//       {jsxListItems}
//     </ul>
//   </div>
// );

// /* This appends all our created elements to the page */
// const rootElement = document.createElement('div');
// document.body.appendChild(rootElement);

// // Render the myEl JSX element into the root element with React.
// render(myEl, rootElement);
