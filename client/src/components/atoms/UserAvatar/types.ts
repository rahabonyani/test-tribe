import type { Maybe, Media } from '@tribeplatform/gql-client/types';

export type UserAvatarProps = {
  profilePicture?: Maybe<Media>;
  status: 'idle' | 'error' | 'loading' | 'success';
};
