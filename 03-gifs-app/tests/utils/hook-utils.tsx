// tests/utils/hook-utils.tsx
import React from 'react';
import { renderHook, act } from '@testing-library/react';

type WrapperFC = React.FC<{ children: React.ReactNode }>;

export function renderHookWithProviders<TProps, TResult>(
  callback: (props: TProps) => TResult,
  {
    wrapper, // opcional: ThemeProvider, Router, QueryClientProvider, etc.
    initialProps,
  }: { wrapper?: WrapperFC; initialProps?: TProps } = {}
) {
  const utils = renderHook(callback, {
    wrapper: wrapper ?? (({ children }) => <>{children}</>),
    initialProps,
  });

  // Helper para acciones sync
  const doAct = (fn: () => void) => {
    act(() => {
      fn();
    });
  };

  // Helper para acciones async
  const doActAsync = async (fn: () => Promise<void> | void) => {
    await act(async () => {
      await fn();
    });
  };

  return {
    ...utils,
    doAct,
    doActAsync,
    // getters “lazy” para acceder al estado actual sin tocar result.current directamente desde el test
    get: () => utils.result.current,
    rerender: (newProps?: TProps) => utils.rerender(newProps as TProps),
    unmount: utils.unmount,
  };
}
