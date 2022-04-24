import { Box, Heading, VStack, Text, Link, HStack } from '@chakra-ui/react';
import { BsBoxArrowUpRight } from 'react-icons/bs';

const AboutUserBox = () => {
  return (
    <VStack alignItems="start" p={4}>
      <Heading as="h6" fontSize="lg">
        About
      </Heading>
      <VStack pt={4} alignItems="start" spacing={4} color="gray.600">
        <Box>
          <Text fontSize="sm" fontWeight={500}>
            Tagline
          </Text>
          <Text fontSize="sm" fontWeight={400}>
            Front-end Developer
          </Text>
        </Box>
        <Box fontSize="sm">
          <Text fontWeight={500}>Member since</Text>
          <Text fontWeight={400}>4/22/2022</Text>
        </Box>
        <Box fontSize="sm">
          <Text fontWeight={500}>Email</Text>

          <Link href="mailto:bonyani.mehrdad@gmail.com" textUnderlineOffset="unset" _hover={{ color: 'black' }}>
            <HStack fontWeight={400}>
              <Text>bonyani.mehrdad@gmail.com</Text>
              <Box>
                <BsBoxArrowUpRight />
              </Box>
            </HStack>
          </Link>
        </Box>
        <Box fontSize="sm">
          <Text fontWeight={500}>Gender</Text>
          <Text fontWeight={400}>Other</Text>
        </Box>
      </VStack>
    </VStack>
  );
};

export default AboutUserBox;
