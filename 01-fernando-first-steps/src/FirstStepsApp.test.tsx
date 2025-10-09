import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { FirstStepsApp } from './FirstStepsApp';

const mockItemCounter = vi.fn((props: unknown) => {
  return <div data-testid="item-counter"></div>;
});

vi.mock('./shopping-cart/ItemCounter', () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

describe('FirstStepsApp', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should render the correct number of ItemCounter components', () => {
    render(<FirstStepsApp />);

    const items = screen.getAllByTestId('item-counter');

    expect(items.length).toBe(3);
  });

  test('should render ItemCounter with correct props', () => {
    render(<FirstStepsApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(3);
  });
});
