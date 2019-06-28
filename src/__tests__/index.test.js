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

test('alert', async () => {
    const name = 'The_test_name';
    const { getByLabelText, getByText } = render(<App />);

    fireEvent.change(getByLabelText('Name:'), {target : {value : name}})
    fireEvent.click(getByText('Submit'));

    expect(global.alert).toBeCalledWith("A name was submitted: " + name);
});
test('alert2', async () => {
    const name = 'The_test_name';
    const { getByLabelText, getByText } = render(<App />);

    fireEvent.change(getByLabelText('Name:'), {target : {value : name}})
    fireEvent.click(getByText('Submit'));

    expect(global.alert).toBeCalledWith("A name was submitted: " + name);
});
test('alert3', async () => {
    // failing test
    const name = 'The_test_name';
    const { getByLabelText, getByText } = render(<App />);

    fireEvent.change(getByLabelText('Name:'), {target : {value : name}})
    fireEvent.click(getByText('Submit'));

    expect(global.alert).toBeCalledWith("A name was NOT submitted: " + name);
});
