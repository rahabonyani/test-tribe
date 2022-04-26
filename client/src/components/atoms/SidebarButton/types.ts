import type { JSXElementConstructor, ReactElement, ReactNode } from 'react';

export type SidebarButtonProps = {
  children: ReactNode;
  icon?: ReactElement<any, string | JSXElementConstructor<any>>;
};
