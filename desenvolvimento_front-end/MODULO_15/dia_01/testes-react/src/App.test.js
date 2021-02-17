import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Check all inputs and lables', () => {
  it('Should have a lable Email with type = \'email\'', () => {
    render(<App />);
    const emailInput = screen.getByLabelText(/Email/i);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput.type).toBe('email');
  });
  it('Should have 2 buttons', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
    expect(buttons.length).toBe(2);
    expect(buttons[0].value).toBe('Enviar');
    expect(buttons[1]).toHaveValue('Voltar');
  });
})
