import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import TrafficLight from './components/traffic_light.jsx';

import 'jquery';
import 'popper.js';
import 'bootstrap';

ReactDOM.render(
      <TrafficLight />,
    document.getElementById('root')
  );