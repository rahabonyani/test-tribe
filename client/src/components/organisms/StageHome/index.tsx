import { Box, VStack } from '@chakra-ui/react';
import Banner from '../../atoms/Banner';
import UserInfo from '../../molecules/UserInfo';
import type { StageHomeProps } from './types';

const StageHome = (props: StageHomeProps) => {
  const { banner, name, role, status, profilePicture } = props;
  return (
    <VStack roundedTop={10} bg="white">
      <Box w="100%" h="40" roundedTop={10}>
        <Banner banner={banner} status={status} />
      </Box>
      <UserInfo name={name} role={role} profilePicture={profilePicture} status={status} />
    </VStack>
  );
};

export default StageHome;
