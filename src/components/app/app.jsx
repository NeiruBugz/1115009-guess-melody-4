import React from 'react';
import PropTypes from 'prop-types';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = ({settings}) => {
  const {errorsCount} = settings;
  return (
    <WelcomeScreen errorsCount={errorsCount} />
  );
};

App.propTypes = {
  settings: PropTypes.shape({
    errorsCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default App;
