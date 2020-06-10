import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const baseSettings = {
  errorsCount: 3,
};

ReactDOM.render(
    <App settings={baseSettings} />,
    document.querySelector(`#root`)
);
