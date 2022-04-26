import { Box, Heading, VStack, Text, Link, HStack, Skeleton } from '@chakra-ui/react';
import { useMemo } from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import UtilsText from '../../atoms/UtilsText';
import type { aboutUserBoxProps } from './types';

const AboutUserBox = (props: aboutUserBoxProps) => {
  const { isLoading, tagline, since, email, fields } = props;

  const date = useMemo(() => since?.split('T')[0], [since]);

  return (
    <VStack alignItems="start" p={4}>
      <Heading as="h6" fontSize="lg">
        About
      </Heading>
      <VStack pt={4} alignItems="start" spacing={4} color="gray.600" w="full">
        <UtilsText loading={isLoading} title="Tagline" value={tagline} />
        <UtilsText loading={isLoading} title="Member since" value={date} />
        <UtilsText
          loading={isLoading}
          title="Email"
          value={
            <Link href="mailto:bonyani.mehrdad@gmail.com" textUnderlineOffset="unset" _hover={{ color: 'black' }}>
              <HStack fontWeight={400}>
                <Text>{email}</Text>
                <Box>
                  <BsBoxArrowUpRight />
                </Box>
              </HStack>
            </Link>
          }
        />

        {isLoading ? (
          <Skeleton height="20px" w="full" mt={4} />
        ) : (
          fields?.map(item => item.value !== 'null' && <UtilsText key={item.key} loading={isLoading} title={item.key} value={item.value} />)
        )}
      </VStack>
    </VStack>
  );
};

export default AboutUserBox;
