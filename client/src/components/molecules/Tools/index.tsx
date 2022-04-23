import { Box, Menu, MenuButton, Avatar, MenuList, MenuItem, MenuDivider, HStack } from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
const Tools = () => {
  return (
    <HStack justifyContent="end">
      <Box>
        <Menu autoSelect={false} placement="bottom-end" gutter={0}>
          <MenuButton px={1} py={2} transition="all 0.2s" borderRadius="md">
            <Avatar size="md" icon={<BiPlus />} bg="gray.600" color="white" fontSize="3xl" />
          </MenuButton>
          <MenuList>
            <MenuItem>Add Post</MenuItem>
            <MenuItem>Add Event</MenuItem>
            <MenuItem>Add Space</MenuItem>
            <MenuItem>Add Collection</MenuItem>
            <MenuItem>invite Member</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box>
        <Menu autoSelect={false} placement="bottom-end" gutter={0}>
          <MenuButton px={1} py={2} transition="all 0.2s" borderRadius="md">
            <Avatar size="md" name="Dan Abrahmov" bg="white" />
          </MenuButton>
          <MenuList>
            <MenuItem>Your Profile</MenuItem>
            <MenuItem>Account settings</MenuItem>
            <MenuDivider />
            <MenuItem>Administration</MenuItem>
            <MenuItem>Moderation</MenuItem>
            <MenuItem>Help & Community</MenuItem>
            <MenuDivider />
            <MenuItem>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </HStack>
  );
};

export default Tools;
