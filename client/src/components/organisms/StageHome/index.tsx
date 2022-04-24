import { Box, Image, Skeleton, VStack } from '@chakra-ui/react';
import { Image as ImageType } from '@tribeplatform/gql-client/types';
import UserInfo from '../../molecules/UserInfo';
import { stageHomeProps } from './types';

const StageHome = ({ banner, name, role, status, profilePicture }: stageHomeProps) => {
  return (
    <VStack roundedTop={10} bg="white">
      <Box w="100%" h="40" roundedTop={10}>
        {status === 'loading' ? (
          <Skeleton h="full" w="full" />
        ) : (
          <Image src={(banner as ImageType)?.url} alt="" w="100%" h="100%" objectFit="cover" roundedTop={10} />
        )}
      </Box>
      <UserInfo name={name} role={role} profilePicture={profilePicture} status={status} />
    </VStack>
  );
};

export default StageHome;
