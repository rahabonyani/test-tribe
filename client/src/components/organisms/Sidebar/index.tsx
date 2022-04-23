import { Box, Button, VStack } from '@chakra-ui/react';
import Transitions from '../../molecules/Transitions';
import { HiOutlineUserGroup, HiOutlineHome, HiOutlineViewGrid } from 'react-icons/hi';

const Sidebar = () => {
  return (
    <VStack w="100%" py="4" bg="white" rounded={10} boxShadow="md">
      <Button
        rounded={0}
        _focus={{ boxShadow: 'unset' }}
        leftIcon={
          <Box fontSize="2xl">
            <HiOutlineHome />
          </Box>
        }
        w="100%"
        justifyContent="start"
        bg="transparent"
        _hover={{ bg: 'gray.100' }}
        fontSize="lg"
        fontWeight="normal"
      >
        Home
      </Button>
      <Button
        rounded={0}
        _focus={{ boxShadow: 'unset' }}
        leftIcon={
          <Box fontSize="2xl">
            <HiOutlineUserGroup />
          </Box>
        }
        w="100%"
        justifyContent="start"
        bg="transparent"
        _hover={{ bg: 'gray.100' }}
        fontSize="lg"
        fontWeight="normal"
      >
        Member
      </Button>
      <Button
        rounded={0}
        leftIcon={
          <Box fontSize="2xl">
            <HiOutlineViewGrid />
          </Box>
        }
        w="100%"
        justifyContent="start"
        bg="transparent"
        _hover={{ bg: 'gray.100' }}
        fontSize="lg"
        fontWeight="normal"
      >
        Spaces
      </Button>
      <Transitions />
    </VStack>
  );
};

export default Sidebar;
