import React from 'react';
import PropTypes from 'prop-types';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = ({settings}) => {
  const {errorsCount, rules} = settings;
  return (
    <WelcomeScreen errorsCount={errorsCount} rules={rules} />
  );
};

App.propTypes = {
  settings: PropTypes.shape({
    errorsCount: PropTypes.number.isRequired,
    rules: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
