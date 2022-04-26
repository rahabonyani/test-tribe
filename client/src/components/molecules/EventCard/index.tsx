import { Avatar, Box, Heading, HStack, Menu, MenuButton, MenuDivider, MenuItem, MenuList, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { useMemo } from 'react';
import { BiPlus, BiSave, BiVideo } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import type { EventCardProps } from './types';
import parse from 'html-react-parser';
import UserAvatar from '../../atoms/UserAvatar';
import CardButton from '../../atoms/CardButton';

const EventCard = (props: EventCardProps) => {
  const { name, title, tagline, shortContent, profilePicture } = props;

  const text = useMemo(() => shortContent && parse(shortContent), [shortContent]);

  return (
    <VStack w="full" bg="white" rounded={10} mb="5">
      <HStack p={4} w="full" justifyContent="space-between">
        <HStack>
          <Box w={16} h={16} boxShadow="lg" rounded="full">
            <UserAvatar status="success" profilePicture={profilePicture} />
          </Box>
          <VStack alignItems="start" spacing={1} ps={2}>
            <Text fontSize="xl" fontWeight="medium">
              {name}
            </Text>
            <Text>{tagline}</Text>
          </VStack>
        </HStack>
        <Box>
          <Menu autoSelect={false} placement="bottom-end" gutter={0}>
            <MenuButton px={1} py={2} transition="all 0.2s" borderRadius="md">
              <Avatar size="sm" icon={<BsThreeDots />} bg="white" color="gray.600" fontSize="2xl" />
            </MenuButton>
            <MenuList>
              <MenuItem>Edit Post</MenuItem>
              <MenuItem>Delete Event</MenuItem>
              <MenuDivider />
              <MenuItem>Audit logs</MenuItem>
              <MenuItem>Hide</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </HStack>
      <Heading w="full" as="h6" fontSize="2xl" ps={4} textAlign="start">
        {title}
      </Heading>

      <Box textAlign="start" p={4} w="full">
        {text}
      </Box>
      <SimpleGrid columns={3} spacing={10} w="full" px={4} pb={5}>
        <Box>
          <CardButton icon={<BiPlus fontSize="lg" />}>Add in Calender</CardButton>
        </Box>
        <Box>
          <CardButton icon={<BiVideo fontSize="lg" />}>Zoom</CardButton>
        </Box>
        <Box>
          <CardButton icon={<BiSave fontSize="lg" />}>Save</CardButton>
        </Box>
      </SimpleGrid>
    </VStack>
  );
};

export default EventCard;
