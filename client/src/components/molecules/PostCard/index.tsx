import {
  Avatar,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { BiBell, BiLike, BiShareAlt } from 'react-icons/bi';
import { BsChevronRight, BsThreeDots } from 'react-icons/bs';

const PostCard = () => {
  return (
    <VStack w="full" bg="white" rounded={10}>
      <HStack p={4} w="full" justifyContent="space-between">
        <HStack>
          <Box w={16} h={16} boxShadow="lg" rounded="full">
            <Image rounded="full" w="full" h="full" objectFit="cover" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
          </Box>
          <VStack alignItems="start" spacing={1} ps={2}>
            <Breadcrumb spacing="8px" separator={<BsChevronRight color="gray.500" />}>
              <BreadcrumbItem fontWeight={500}>
                <BreadcrumbLink href="#">Mehrdad</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Mountains</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Text>a day ago . Front-end Developer</Text>
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
      <Box w="full">
        <Image
          w="full"
          h="full"
          src="https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
          alt=""
          objectFit="cover"
        />
      </Box>
      <Text textAlign="start" p={4} w="full">
        when your on the summit you can see everything around you
      </Text>
      <SimpleGrid columns={3} spacing={10} w="full" px={4} pb={5}>
        <Box>
          <Button
            borderColor="gray.600"
            color="gray.600"
            leftIcon={<BiLike fontSize="lg" />}
            colorScheme="blue"
            variant="outline"
            w="full"
            _hover={{ bg: 'gray.100' }}
          >
            Like
          </Button>
        </Box>
        <Box>
          <Button
            borderColor="gray.600"
            color="gray.600"
            leftIcon={<BiBell fontSize="lg" />}
            colorScheme="blue"
            variant="outline"
            w="full"
            _hover={{ bg: 'gray.100' }}
          >
            Follow
          </Button>
        </Box>
        <Box>
          <Button
            borderColor="gray.600"
            color="gray.600"
            leftIcon={<BiShareAlt fontSize="lg" />}
            colorScheme="blue"
            variant="outline"
            w="full"
            _hover={{ bg: 'gray.100' }}
          >
            Share
          </Button>
        </Box>
      </SimpleGrid>
    </VStack>
  );
};

export default PostCard;
