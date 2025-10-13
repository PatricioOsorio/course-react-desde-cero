import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test, vi, afterEach } from 'vitest';
import { SearchBar, type ISearchBarProps } from './SearchBar';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

const onQueryMock = vi.fn();

const renderSearchBar = (props: ISearchBarProps) => {
  render(<SearchBar {...props} />);

  return {
    user: userEvent.setup(),
    getInput: () => screen.getByRole('textbox'),
    getButton: () => screen.getByRole('button', { name: /search/i }),
  };
};

afterEach(() => {
  onQueryMock.mockReset();
});

describe('SearchBar', () => {
  test('should render the component correctly', () => {
    const { getInput, getButton } = renderSearchBar({ onQuery: onQueryMock });

    expect(getInput()).toBeInTheDocument();
    expect(getButton()).toBeInTheDocument();
  });

  test('should call onQuery with the correct value after typing in the input', async () => {
    const { user, getInput } = renderSearchBar({ onQuery: onQueryMock });

    await user.type(getInput(), 'cats');

    expect(onQueryMock).not.toHaveBeenCalled();

    await waitFor(
      () => {
        expect(onQueryMock).toHaveBeenCalledTimes(1);
        expect(onQueryMock).toHaveBeenCalledWith('cats');
      },
      { timeout: 1100 }
    );
  });
});
