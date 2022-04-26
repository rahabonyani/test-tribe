import { Button, Box } from '@chakra-ui/react';
import type { SidebarButtonProps } from './types';

const SidebarButton = (props: SidebarButtonProps) => {
  const { children, icon } = props;
  return (
    <Button
      rounded={0}
      _focus={{ boxShadow: 'unset' }}
      leftIcon={icon}
      w="100%"
      justifyContent="start"
      bg="transparent"
      _hover={{ bg: 'gray.100' }}
      fontSize="lg"
      fontWeight="normal"
    >
      {children}
    </Button>
  );
};

export default SidebarButton;
