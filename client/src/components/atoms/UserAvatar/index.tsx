import { SkeletonCircle, Image, Text } from '@chakra-ui/react';
import type { UserAvatarProps } from './types';

const UserAvatar = (props: UserAvatarProps) => {
  const { profilePicture, status } = props;

  if (status === 'loading') {
    return <SkeletonCircle size="full" opacity="1" />;
  }

  return profilePicture && profilePicture !== null && 'url' in profilePicture ? (
    <Image borderRadius="full" w="100%" h="100%" objectFit="cover" src={profilePicture.url} alt="name" />
  ) : (
    <Text>{profilePicture?.text}</Text>
  );
};

export default UserAvatar;
