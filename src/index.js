import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';

 /* PAGES */
import Home from './pages/Home';
import Pictures from './pages/Pictures';
import Videos from './pages/Videos';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pics" element={<Pictures />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
