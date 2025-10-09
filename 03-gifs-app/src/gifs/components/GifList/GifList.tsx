import type { ComponentPropsWithoutRef } from 'react';
import './GifList.scss';
import { Gif } from '../Gif/Gif';
import classNames from 'classnames';
import type { IGif } from '../../interfaces/gif.interface';

export interface IGifListProps extends ComponentPropsWithoutRef<'section'> {
  gifs: IGif[];
}

export const GifList = ({ gifs, ...props }: IGifListProps) => {

  return (
    <section {...props} className={classNames(props.className, 'gif-list-container gifs-container')}>
      {gifs.map((gif) => (
        <Gif key={gif.id} {...gif} />
      ))}
    </section>
  );
};
