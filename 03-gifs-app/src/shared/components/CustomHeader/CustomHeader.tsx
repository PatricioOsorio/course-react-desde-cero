import type { ComponentPropsWithoutRef } from 'react';
import './CustomHeader.scss';
import classNames from 'classnames';

export interface ICustomHeaderProps extends ComponentPropsWithoutRef<'header'> {
  title: string;
  description?: string;
}

export const CustomHeader = ({ title, description, ...props }: ICustomHeaderProps) => {
  return (
    <header {...props} className={classNames(props.className, 'custom-header-container', 'content-center')}>
      <h1>{title}</h1>

      {description && <p>{description}</p>}
    </header>
  );
};
