import { HStack, Box, Heading, Button, Image } from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';
import { FaPen } from 'react-icons/fa';

const UserInfo = () => {
  return (
    <HStack w="100%" justifyContent="space-between" p={6} position="relative">
      <HStack>
        <Box position="absolute" w={32} h={32} top="-16" borderRadius="full" borderWidth={4} borderColor="white" boxShadow="lg">
          <Image borderRadius="full" w="100%" h="100%" objectFit="cover" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </Box>
        <HStack ps={32}>
          <Heading as="h6" fontSize="xl">
            Mehrdad
          </Heading>
          <Box fontSize="xs" fontWeight="normal" py={0.5} px={2} rounded={15} bg="gray.300">
            Admin
          </Box>
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
