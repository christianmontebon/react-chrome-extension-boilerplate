
import React from 'react';
import { createRoot } from 'react-dom/client';

import '../assets/tailwind.css';

const Popup = (
  <div>
    <h1 className="text-5xl text-green-500">Hello World!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minima, adipisci accusamus culpa recusandae dolore quaerat autem, alias soluta dignissimos, inventore optio magni quasi dolorem iste harum amet praesentium. Suscipit.</p>
    <img src="banner.png" alt="banner-placeholder"></img>
  </div>
);

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(Popup);