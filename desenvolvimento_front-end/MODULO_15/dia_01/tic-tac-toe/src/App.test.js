import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
 const { getByText } = render(<App />);
  const linkElement = getByText('Tic Tac Toe');
  expect(linkElement).toBeInTheDocument();
});
