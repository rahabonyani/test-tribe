import { Box, Button, Collapse, useDisclosure, VStack } from '@chakra-ui/react';
import { HiChevronRight } from 'react-icons/hi';
import { GiMountainCave, GiAtSea } from 'react-icons/gi';
import SidebarButton from '../../atoms/SidebarButton';
import { useMemo } from 'react';

const Transitions = () => {
  const { isOpen, onToggle } = useDisclosure();

  const rotate = useMemo(() => (isOpen ? 'rotate(90deg)' : 'rotate(0deg)'), [isOpen]);

  return (
    <Box w="100%">
      <Button
        rounded={0}
        _focus={{ boxShadow: 'unset' }}
        leftIcon={
          <Box fontSize="2xl" transform={rotate} transitionDuration="0.3s">
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
          <SidebarButton
            icon={
              <Box fontSize="2xl" color="yellow.700">
                <GiMountainCave />
              </Box>
            }
          >
            Mountains{' '}
          </SidebarButton>
          <SidebarButton
            icon={
              <Box fontSize="2xl" color="blue.400">
                <GiAtSea />
              </Box>
            }
          >
            Seas
          </SidebarButton>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Transitions;
