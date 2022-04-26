import { Box, Heading, VStack, Text, Link, HStack, Skeleton } from '@chakra-ui/react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { aboutUserBoxProps } from './types';

const AboutUserBox = (props: aboutUserBoxProps) => {
  const { isLoading, tagline, since, email, fields } = props;
  return (
    <VStack alignItems="start" p={4}>
      <Heading as="h6" fontSize="lg">
        About
      </Heading>
      <VStack pt={4} alignItems="start" spacing={4} color="gray.600" w="full">
        <Box w="full">
          <Text fontSize="sm" fontWeight={500}>
            Tagline
          </Text>
          {isLoading ? (
            <Skeleton height="20px" mt={3} />
          ) : (
            <Text fontSize="sm" fontWeight={400}>
              {tagline}
            </Text>
          )}
        </Box>
        <Box fontSize="sm" w="full">
          <Text fontWeight={500}>Member since</Text>

          {isLoading ? <Skeleton height="4" w="full" mt={3} /> : <Text fontWeight={400}>{since?.split('T')[0]}</Text>}
        </Box>
        <Box fontSize="sm" w="full">
          <Text fontWeight={500}>Email</Text>
          {isLoading ? (
            <Skeleton height="20px" w="full" mt={3} />
          ) : (
            <Link href="mailto:bonyani.mehrdad@gmail.com" textUnderlineOffset="unset" _hover={{ color: 'black' }}>
              <HStack fontWeight={400}>
                <Text>{email}</Text>
                <Box>
                  <BsBoxArrowUpRight />
                </Box>
              </HStack>
            </Link>
          )}
        </Box>
        {isLoading ? (
          <Skeleton height="20px" w="full" mt={4} />
        ) : (
          fields?.map(
            item =>
              item.value !== 'null' && (
                <Box fontSize="sm" key={item.key}>
                  <Text fontWeight={500}>{item.key}</Text>
                  <Text fontWeight={400}>{item.value}</Text>
                </Box>
              ),
          )
        )}
      </VStack>
    </VStack>
  );
};

export default AboutUserBox;
