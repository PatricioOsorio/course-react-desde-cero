import { describe, expect, test, vi } from 'vitest';
import { Counter, type ICounterProps } from './Counter';
import { fireEvent, render, screen } from '@testing-library/react';

const handleAddMock = vi.fn();
const handleSubtractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock('../../hooks/useCounter', () => ({
  useCounter: () => ({
    counter: 40,
    handleAdd: handleAddMock,
    handleSubtract: handleSubtractMock,
    handleReset: handleResetMock,
  }),
}));

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
  test('should render the component', () => {
    const { getCounter, getAddBtn, getResetBtn, getSubtractBtn } = renderCounter();

    screen.debug();
    expect(getCounter()).toHaveTextContent('40');
    expect(getAddBtn()).toBeInTheDocument();
    expect(getResetBtn()).toBeInTheDocument();
    expect(getSubtractBtn()).toBeInTheDocument();
  });

  test('should call handleAdd if button is clicked', () => {
    const { getAddBtn } = renderCounter();

    fireEvent.click(getAddBtn());

    expect(handleAddMock).toHaveBeenCalled();
  });

  test('should call handleReset if button is clicked', () => {
    const { getResetBtn } = renderCounter();

    fireEvent.click(getResetBtn());

    expect(handleResetMock).toHaveBeenCalled();
  });

  test('should call handleSubtract if button is clicked', () => {
    const { getSubtractBtn } = renderCounter();

    fireEvent.click(getSubtractBtn());

    expect(handleSubtractMock).toHaveBeenCalled();
  });
});
