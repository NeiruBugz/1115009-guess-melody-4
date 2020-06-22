import React from 'react';
import renderer from 'react-test-renderer';

import WelcomeScreen from './welcome-screen.jsx';

describe(`WelcomeScreen renders correctly`, () => {
  it(`should render WelcomeScreen with passed props`, () => {
    const welcomeScreen = renderer.create(
        <WelcomeScreen errorsCount={3} onWelcomeButtonClick={jest.fn()}/>
    ).toJSON();

    expect(welcomeScreen).toMatchSnapshot();
  });
});
