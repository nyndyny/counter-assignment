// import necessary react testing library helpers here
// import the Counter component here
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

let component;

beforeEach(() => {
  // Render the Counter component here
  component = render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const { getByText } = component;
  const counterMessage = getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const { getByTestId } = component;
  const countElement = getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const { getByTestId, getByText } = component;
  const countElement = getByTestId('count');
  const incrementButton = getByText('+');
  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const { getByTestId, getByText } = component;
  const countElement = getByTestId('count');
  const decrementButton = getByText('-');
  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent('-1');
});
