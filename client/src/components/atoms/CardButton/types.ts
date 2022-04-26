import type { JSXElementConstructor, ReactElement, ReactNode } from 'react';

export type CardButtonProps = {
  children: ReactNode;
  icon: ReactElement<any, string | JSXElementConstructor<any>>;
};
