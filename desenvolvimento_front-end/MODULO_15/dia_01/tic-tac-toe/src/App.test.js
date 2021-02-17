import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import TicTacToe from './components/TicTacToe';

describe('Verify all compenets in screen', () => {
  it('Shoul render App componete correctly', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toBeInTheDocument();
  });
  it('Should container a Tic Tac Toe text', () => {
    render(<TicTacToe />);
    const result = screen.getByText('Tic Tac Toe')
    expect(result).toBeInTheDocument();
  });
  it('Should container a board', () => {
    const { getByTestId } = render(<TicTacToe />);
    expect(getByTestId('board')).toBeInTheDocument()
  });
  it('Should container 9 cell', () => {
    const { getAllByTestId } = render(<TicTacToe />);
    expect(getAllByTestId('cell')).toHaveLength(9);
  });
});

describe('The user is capable to interact with the board', () => {
  it('', () => {
    render(<TicTacToe />);
    const cellsAtBoard = screen.getAllByTestId('cell');
    fireEvent.click(cellsAtBoard)
  });
})
