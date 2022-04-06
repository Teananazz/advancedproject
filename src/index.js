import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const Root_Element = document.getElementById("root");

const root = ReactDOM.createRoot(Root_Element);
const Rendered_elements = <App />

root.render(Rendered_elements);
