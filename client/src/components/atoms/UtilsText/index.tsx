import { Box, Skeleton, Text } from '@chakra-ui/react';
import { UtilsTextProps } from './types';

const UtilsText = (props: UtilsTextProps) => {
  const { loading, value, title } = props;
  return (
    <Box w="full">
      <Text fontSize="sm" fontWeight={500}>
        {title}
      </Text>
      {loading ? (
        <Skeleton height={4} mt={3} />
      ) : (
        <Box fontSize="sm" fontWeight={400}>
          {value}
        </Box>
      )}
    </Box>
  );
};

export default UtilsText;
