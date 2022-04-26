import type { Maybe } from '@tribeplatform/gql-client/types';
import type { ReactNode } from 'react';

export type UtilsTextProps = {
  loading?: boolean;
  title?: Maybe<string>;
  value?: ReactNode;
};
