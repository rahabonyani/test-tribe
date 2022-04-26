import { Button } from '@chakra-ui/react';
import { CardButtonProps } from './types';

const CardButton = (props: CardButtonProps) => {
  const { children, icon } = props;
  return (
    <Button borderColor="gray.600" color="gray.600" leftIcon={icon} colorScheme="blue" variant="outline" w="full" _hover={{ bg: 'gray.100' }}>
      {children}
    </Button>
  );
};

export default CardButton;
