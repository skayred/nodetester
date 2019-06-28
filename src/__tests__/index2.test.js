import React from 'react'
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from 'react-testing-library'
// import 'jest-dom/extend-expect'

import App from '../index.js';

afterEach(cleanup);

global.alert = jest.fn();

test('alert_ex', async () => {
    const name = 'The_test_name';
    const { getByLabelText, getByText } = render(<App />);

    fireEvent.change(getByLabelText('Name:'), {target : {value : name}})
    fireEvent.click(getByText('Submit'));

    expect(global.alert).toBeCalledWith("A name was submitted: " + name);
});
