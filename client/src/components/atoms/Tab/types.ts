import type { ResponsiveValue } from '@chakra-ui/react';
import type { ReactNode } from 'react';

export type TabProps = {
  children: ReactNode;
  borderRightWidth?: ResponsiveValue<
    number | (string & {}) | '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'unset' | 'medium' | 'thick' | 'thin'
  >;
};
