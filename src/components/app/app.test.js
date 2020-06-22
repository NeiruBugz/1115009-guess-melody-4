import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';

const mockSettings = {
  errorsCount: 3,
};

describe(`App renders correctly`, function () {
  it(`should render App with passed props`, function () {
    const app = renderer.create(
        <App settings={mockSettings} />
    ).toJSON();

    expect(app).toMatchSnapshot();
  });
});
