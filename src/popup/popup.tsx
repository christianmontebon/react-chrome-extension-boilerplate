
import React from 'react';
import { createRoot } from 'react-dom/client';

const Popup = <h1>Popup component</h1>;

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(Popup);