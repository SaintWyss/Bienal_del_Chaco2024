import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';


const rootElement = document.getElementById('root') as HTMLElement;
console.log('Variables de entorno:', import.meta.env);
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>

        <App />
    </React.StrictMode>
);