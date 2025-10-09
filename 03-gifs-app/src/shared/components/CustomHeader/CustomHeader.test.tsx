import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CustomHeader, type ICustomHeaderProps } from './CustomHeader';

const renderCustomHeader = (props: ICustomHeaderProps) => {
  render(<CustomHeader {...props} />);

  return {
    getTitle: () => screen.getByRole('heading', { level: 1 }),
    getDescription: (text: string) => screen.queryByText(text),
  };
};

describe('CustomHeader', () => {
  const title = 'default title';
  const description = 'default description';

  test('should render the title correctly', () => {
    const { getTitle } = renderCustomHeader({ title });

    expect(getTitle()).toBeInTheDocument();
  });

  test('should render the description when provided', () => {
    const { getDescription } = renderCustomHeader({ title, description });

    expect(getDescription(description)).toBeInTheDocument();
  });

  test('should not render description when not provided', () => {
    const { getDescription } = renderCustomHeader({ title });

    expect(getDescription(description)).not.toBeInTheDocument();
  });
});
