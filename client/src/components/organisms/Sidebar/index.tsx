import { Box, Button, VStack } from '@chakra-ui/react';
import Transitions from '../../molecules/Transitions';
import { HiOutlineUserGroup, HiOutlineHome, HiOutlineViewGrid } from 'react-icons/hi';
import SidebarButton from '../../atoms/SidebarButton';

const Sidebar = () => {
  return (
    <VStack w="100%" py="4" bg="white" rounded={10} boxShadow="md">
      <SidebarButton
        icon={
          <Box fontSize="2xl">
            <HiOutlineHome />
          </Box>
        }
      >
        Home
      </SidebarButton>
      <SidebarButton
        icon={
          <Box fontSize="2xl">
            <HiOutlineUserGroup />
          </Box>
        }
      >
        Member
      </SidebarButton>
      <SidebarButton
        icon={
          <Box fontSize="2xl">
            <HiOutlineViewGrid />
          </Box>
        }
      >
        Spaces
      </SidebarButton>
      <Transitions />
    </VStack>
  );
};

export default Sidebar;
