// 1. Import the extendTheme function
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';
import '../assets/css/index.css';

import { createBreakpoints } from '@chakra-ui/theme-tools';

export default createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
});

const global = {
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'yellow.100',
        color: 'black',
        fontSize: 16,
        overflowX: 'hidden',
      },
    },
  },
};

const custom = {
  colors: {
    yellow: {
      100: '#fdf6e3',
      200: '#eee8d5',
    },
    gray: {
      50: '#f4f1ea',
      100: '#f2ebd8',
      600: '#5a7575',
    },
  },
};

interface Props {
  children: ReactNode;
}

// 3. Pass the `theme` prop to the `ChakraProvider`
export const ThemWrapper = ({ children }: Props) => {
  const theme = extendTheme({ ...custom, ...global });

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
