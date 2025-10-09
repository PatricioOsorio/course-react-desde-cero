import { describe, expect, test } from 'vitest';
import { MyAwesomeApp } from './MyAwesomeApp';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('MyAwesomeApp', () => {
  test('should render first and last name', () => {
    render(<MyAwesomeApp />);

    screen.debug();

    const firstName = screen.getByRole('heading', { level: 1, name: /fernando/i });
    const lastName = screen.getByRole('heading', { level: 3, name: /herrera/i });

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
  });
});
