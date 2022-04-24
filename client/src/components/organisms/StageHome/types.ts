import { Maybe, Media, Member } from '@tribeplatform/gql-client/types';

export type stageHomeProps = {
  name?: Maybe<string>;
  role?: Maybe<string>;
  profilePicture?: Maybe<Media>;
  banner?: Maybe<Media>;
  status: 'idle' | 'error' | 'loading' | 'success';
};
