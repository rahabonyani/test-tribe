import { Box, Image, VStack } from '@chakra-ui/react';

import UserInfo from '../../molecules/UserInfo';

const StageHome = () => {
  return (
    <VStack roundedTop={10} bg="white">
      <Box w="100%" h="40" roundedTop={10}>
        <Image
          src="https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
          alt=""
          w="100%"
          h="100%"
          objectFit="cover"
          roundedTop={10}
        />
      </Box>
      <UserInfo />
    </VStack>
  );
};

export default StageHome;
