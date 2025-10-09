import { describe, expect, test } from 'vitest';
import { useCounter } from './useCounter';
import { renderHookWithProviders } from '../../../tests/utils/hook-utils';

const renderUseCounter = (initialValue?: number) => {
  const api = renderHookWithProviders(() => useCounter(initialValue));

  return {
    getCounter: () => api.get().counter,

    add: () => api.doAct(() => api.get().handleAdd()),
    reset: () => api.doAct(() => api.get().handleReset()),
    subtract: () => api.doAct(() => api.get().handleSubtract()),
  };
};

describe('useCounter', () => {
  test('should initialize with default 0', () => {
    const { getCounter } = renderUseCounter();
    expect(getCounter()).toBe(0);
  });

  test('should initialize with provided value', () => {
    const initialValue = 10;
    const { getCounter } = renderUseCounter(initialValue);
    expect(getCounter()).toBe(initialValue);
  });

  test('should increment when add is called', () => {
    const { getCounter, add } = renderUseCounter(0);
    add();
    expect(getCounter()).toBe(1);
  });

  test('should reset when reset is called', () => {
    const { getCounter, add, reset } = renderUseCounter(0);
    add();
    reset();
    expect(getCounter()).toBe(0);
  });

  test('should subtract when subtract is called', () => {
    const { getCounter, subtract } = renderUseCounter(10);
    subtract();
    expect(getCounter()).toBe(9);
  });
});
