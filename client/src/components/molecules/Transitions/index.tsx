import { Box, Button, Collapse, useDisclosure, VStack } from '@chakra-ui/react';
import { HiChevronRight } from 'react-icons/hi';
import { GiMountainCave, GiAtSea } from 'react-icons/gi';
const Transitions = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box w="100%">
      <Button
        rounded={0}
        _focus={{ boxShadow: 'unset' }}
        leftIcon={
          <Box fontSize="2xl" transform={isOpen ? 'rotate(90deg)' : 'rotate(0deg)'} transitionDuration="0.3s">
            <HiChevronRight />
          </Box>
        }
        onClick={onToggle}
        w="100%"
        justifyContent="start"
        bg="transparent"
        _hover={{ bg: 'gray.100' }}
      >
        Traveling
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <VStack rounded={0} shadow="md">
          <Button
            rounded={0}
            leftIcon={
              <Box fontSize="2xl" color="yellow.700">
                <GiMountainCave />
              </Box>
            }
            w="100%"
            justifyContent="start"
            bg="transparent"
            _hover={{ bg: 'gray.100' }}
            _focus={{ boxShadow: 'unset' }}
          >
            Mountains
          </Button>
          <Button
            rounded={0}
            leftIcon={
              <Box fontSize="2xl" color="blue.400">
                <GiAtSea />
              </Box>
            }
            w="100%"
            justifyContent="start"
            bg="transparent"
            _hover={{ bg: 'gray.100' }}
            _focus={{ boxShadow: 'unset' }}
          >
            Seas
          </Button>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Transitions;
