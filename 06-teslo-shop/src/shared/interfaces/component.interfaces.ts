import type React from 'react';
import type { ComponentProps, PropsWithChildren, ReactNode } from 'react';

export type IWithLoading = {
  isLoading?: boolean;
};

export type IWithEmpty = {
  isEmpty?: boolean;
  emptyTemplate?: ReactNode;
};

export type IWithChildren = PropsWithChildren;

export type IWithComponentProps<T extends React.ElementType> = ComponentProps<T>;

export type IWithTestId = {
  'data-testid'?: string;
};

export type IWithRootProps<TRoot extends React.ElementType | object = 'section'> =
  TRoot extends React.ElementType
    ? { rootProps?: React.ComponentPropsWithoutRef<TRoot> }
    : { rootProps?: TRoot };
