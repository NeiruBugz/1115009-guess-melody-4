import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WelcomeScreen from './welcome-screen.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockEvent = {
  preventDefault() {},
};

describe(`WelcomeScreen e2e tests`, () => {
  it(`should handle onClick callback`, () => {
    const mockButtonClick = jest.fn();

    const welcomeScreen = shallow(
        <WelcomeScreen
          onWelcomeButtonClick={mockButtonClick}
          errorsCount={3}
        />
    );

    const welcomeScreenButton = welcomeScreen.find(`button.welcome__button`);

    welcomeScreenButton.simulate(`click`, mockEvent);

    expect(mockButtonClick.mock.calls.length).toBe(1);
  });
});
