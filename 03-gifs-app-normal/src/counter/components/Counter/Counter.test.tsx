import { describe, expect, test } from 'vitest';
import { Counter, type ICounterProps } from './Counter';
import { fireEvent, render, screen } from '@testing-library/react';

const renderCounter = (props?: ICounterProps) => {
  render(<Counter {...props} />);

  return {
    getCounter: () => screen.getByRole('heading', { level: 2 }),
    getAddBtn: () => screen.getByRole('button', { name: '+1' }),
    getResetBtn: () => screen.getByRole('button', { name: /reset/i }),
    getSubtractBtn: () => screen.getByRole('button', { name: '-1' }),
  };
};

describe('Counter', () => {
  const initialValue = 10;

  test('should render the component', () => {
    const { getCounter, getAddBtn, getResetBtn, getSubtractBtn } = renderCounter();

    expect(getCounter()).toHaveTextContent('0');
    expect(getAddBtn()).toBeInTheDocument();
    expect(getResetBtn()).toBeInTheDocument();
    expect(getSubtractBtn()).toBeInTheDocument();
  });

  test('should increment the counter', () => {
    const { getCounter, getAddBtn } = renderCounter();

    fireEvent.click(getAddBtn());

    expect(getCounter()).toHaveTextContent('1');
  });

  test('should decrement the counter', () => {
    const { getCounter, getSubtractBtn } = renderCounter();

    fireEvent.click(getSubtractBtn());

    expect(getCounter()).toHaveTextContent('-1');
  });

  test('should reset the counter', () => {
    const { getCounter, getResetBtn } = renderCounter({ initialValue });

    fireEvent.click(getResetBtn());

    expect(getCounter()).toHaveTextContent(initialValue.toString());
  });
});
