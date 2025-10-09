import type { ComponentPropsWithoutRef } from 'react';
// import { usePreviousSearches } from './usePreviousSearches';
import './PreviousSearches.scss';
import classNames from 'classnames';

export interface IPreviousSearchesProps extends ComponentPropsWithoutRef<'section'> {
  searches: string[];
  onClickTerm: (term: string) => void;
  propsTerm?: ComponentPropsWithoutRef<'button'>;
}

export const PreviousSearches = ({ searches, onClickTerm, propsTerm, ...props }: IPreviousSearchesProps) => {
  return (
    <section {...props} className={classNames(props.className, 'previous-searches-container', 'previous-searches')}>
      <h2>Previous searches</h2>
      <ul className="previous-searches-list">
        {searches.map((search) => (
          <button
            key={search}
            onClick={(e) => {
              onClickTerm(search);
              propsTerm?.onClick?.(e);
            }}
            {...propsTerm}
          >
            {search}
          </button>
        ))}
      </ul>
    </section>
  );
};
