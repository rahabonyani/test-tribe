import { Maybe, Media } from '@tribeplatform/gql-client/types';

export type userInfoProps = {
  name?: Maybe<string>;
  role?: Maybe<string>;
  profilePicture?: Maybe<Media>;
  status: 'idle' | 'error' | 'loading' | 'success';
};
