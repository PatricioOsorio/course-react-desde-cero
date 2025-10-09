import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import { GifsApp } from './GifsApp';

describe('GifsApp', () => {
  test('should render de component', () => {
    render(<GifsApp />);
  });
});
