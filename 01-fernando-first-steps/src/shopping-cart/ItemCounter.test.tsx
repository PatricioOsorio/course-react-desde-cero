import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { ItemCounter } from './ItemCounter';
import '@testing-library/jest-dom';

describe('ItemCounter', () => {
  const name = 'pato';
  const quantity = 5;

  test('should render with default values', () => {
    // arrange
    render(<ItemCounter name={name} quantity={quantity} />);

    // act
    const title = screen.getByText(name);
    const $quantity = screen.getByText(quantity);

    // assert
    expect(title).toBeInTheDocument();
    expect($quantity).toBeInTheDocument();
  });

  test('should increase count when +1 button is pressed', () => {
    // arrange
    render(<ItemCounter name={name} />);

    // act
    const [btnAdd] = screen.getAllByRole('button');
    fireEvent.click(btnAdd);

    // assert
    expect(screen.getByText(2)).toBeDefined();
  });

  test('should decrease count when -1 button is pressed', () => {
    render(<ItemCounter name={name} quantity={quantity} />);

    // act
    const counterLabel = screen.getByText(quantity);

    const [, btnSub] = screen.getAllByRole('button');
    fireEvent.click(btnSub);

    // assert
    expect(counterLabel).toHaveTextContent('4');
  });

  test('should not decrease count when -1 button is pressed and quantity is 1', () => {
    render(<ItemCounter name={name} quantity={1} />);

    // act
    const counterLabel = screen.getByText(1);

    const [, btnSub] = screen.getAllByRole('button');
    fireEvent.click(btnSub);

    // assert
    expect(counterLabel).toHaveTextContent('1');
  });
});
