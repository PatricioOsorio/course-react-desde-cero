import type { ComponentPropsWithoutRef } from 'react';
import './Gif.scss';
import classNames from 'classnames';
import type { IGif } from '../../interfaces/gif.interface';

export type IGifProps = ComponentPropsWithoutRef<'section'> & IGif;

export const Gif = ({ url, title, width, height, ...props }: IGifProps) => {
  // const {} = useGif();

  return (
    <section {...props} className={classNames(props.className, 'gif-container gif-card')}>
      <img src={url} alt={title} />
      <h3>{title}</h3>
      <p>
        {width} x {height}
      </p>
    </section>
  );
};
