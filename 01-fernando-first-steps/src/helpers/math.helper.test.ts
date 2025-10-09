import { test, describe, expect, it } from 'vitest';
import { add, multiply, subtract } from './math.helper';

const firstNumber = 5;
const secondNumber = 10;

describe('add', () => {
  test('should add two nums', () => {
    // arrange

    // act
    const result = add(firstNumber, secondNumber);

    // assert
    expect(result).toBe(15);
  });
});

describe('subtract', () => {
  it('should subtract a number', () => {
    // act
    const result = subtract(firstNumber, secondNumber);

    // assert
    expect(result).toBe(-5);
  });
});

describe('multiply', () => {
  it('should multiply a number', () => {
    // act
    const result = multiply(firstNumber, secondNumber);

    // assert
    expect(result).toBe(50);
  });

  it('should return 0 if is multiply by 0', () => {
    // arrange
    const a = 10;
    const b = 0;

    // act
    const result = multiply(a, b);

    //assert
    expect(result).toBe(0);
  });
});
