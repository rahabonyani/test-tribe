import type { Maybe, Media } from '@tribeplatform/gql-client/types';

export type PostCardProps = {
  name?: Maybe<string>;
  title?: Maybe<string>;
  tagline?: Maybe<string>;
  shortContent?: Maybe<string>;
  profilePicture?: Maybe<Media>;
};
