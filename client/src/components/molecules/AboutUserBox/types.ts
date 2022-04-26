import { CustomField, Maybe } from '@tribeplatform/gql-client/types';

export type aboutUserBoxProps = {
  isLoading: boolean;
  tagline?: Maybe<string>;
  since?: Maybe<string>;
  email?: Maybe<string>;
  fields?: Maybe<CustomField[]>;
};
