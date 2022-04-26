import { Skeleton, Image, Text } from '@chakra-ui/react';
import type { BannerProps } from './types';

const Banner = (props: BannerProps) => {
  const { status, banner } = props;

  if (status === 'loading') {
    return <Skeleton h="full" w="full" />;
  }

  return banner && banner !== null && 'url' in banner ? (
    <Image src={banner?.url} alt="" w="100%" h="100%" objectFit="cover" roundedTop={10} />
  ) : (
    <Text>{banner?.text}</Text>
  );
};

export default Banner;
