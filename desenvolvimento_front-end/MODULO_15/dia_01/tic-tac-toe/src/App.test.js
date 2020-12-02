import { render, screen } from '@testing-library/react';
import App from './App';

describe('Verify all compenets in screen', () => {
  it('Shoul render App componete correctly', () => {
    render(<App />);
  });
});
