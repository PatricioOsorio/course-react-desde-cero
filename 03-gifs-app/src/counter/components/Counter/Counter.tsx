import { type ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';
import './Counter.scss';
import { useCounter } from '../../hooks/useCounter';

export interface ICounterProps extends ComponentPropsWithoutRef<'section'> {
  initialValue?: number;
}

export const Counter = ({ initialValue = 0, ...props }: ICounterProps) => {
  const { counter, handleAdd, handleSubtract, handleReset } = useCounter(initialValue);

  return (
    <section {...props} className={classNames(props.className, 'counter-container')}>
      <h2>{counter}</h2>

      <div className="cc__actions">
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubtract}>-1</button>
      </div>
    </section>
  );
};
