import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import TrafficLights from './components/TrafficLights';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<TrafficLights />);
