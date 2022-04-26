import { HStack, Box, Heading, Button, Skeleton } from '@chakra-ui/react';
import { useMemo } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FaPen } from 'react-icons/fa';
import UserAvatar from '../../atoms/UserAvatar';
import type { UserInfoProps } from './types';

const UserInfo = (props: UserInfoProps) => {
  const { name, role, profilePicture, status } = props;
  const isLoading = useMemo(() => status === 'loading', [status]);

  return (
    <HStack w="100%" justifyContent="space-between" p={6} position="relative">
      <HStack>
        <Box position="absolute" w={32} h={32} top="-16" borderRadius="full" borderWidth={4} borderColor="white" boxShadow="lg">
          <UserAvatar profilePicture={profilePicture} status={status} />
        </Box>
        <HStack ps={32}>
          <Heading as="h6" fontSize="xl">
            {isLoading ? <Skeleton height="5" w="20" /> : name}
          </Heading>
          {isLoading ? (
            <Skeleton height="5" w="14" rounded="full" />
          ) : (
            <Box fontSize="xs" fontWeight="normal" py={0.5} px={2} rounded={15} bg="gray.300">
              {role}
            </Box>
          )}
        </HStack>
      </HStack>
      <HStack>
        <Button borderColor="gray.300" color="gray.600" variant="outline" fontSize="xl" boxShadow="md" _hover={{ bg: 'gray.50' }}>
          <BsThreeDots />
        </Button>
        <Button leftIcon={<FaPen />} borderColor="gray.300" color="gray.600" variant="outline" boxShadow="md" _hover={{ bg: 'gray.50' }}>
          Edit Profile
        </Button>
      </HStack>
    </HStack>
  );
};

export default UserInfo;
