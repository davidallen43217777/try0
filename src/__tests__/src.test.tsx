
import { App } from '@/App';
//import { App } from '../App';
import React from 'react';
import { render, screen } from '@testing-library/react';

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

describe('my function or component', () => {
  test('does the following', () => {
    render(<App />);

    expect(screen.getByText('Hi!')).toBeInTheDocument();
  });
});
