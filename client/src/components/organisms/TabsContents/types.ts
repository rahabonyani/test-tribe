import { CustomField, Maybe, PaginatedPost, Post } from '@tribeplatform/gql-client/types';
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query/types/core';

export type tabContentsProps = {
  latestPosts: Post[];
  isLoading: boolean;
  fetchNextPage: (options?: FetchNextPageOptions | undefined) => Promise<InfiniteQueryObserverResult<PaginatedPost, unknown>>;
  isFetchingNextPage: boolean;
  tagline?: Maybe<string>;
  email?: Maybe<string>;
  createdAt?: Maybe<string>;
  fields?: Maybe<CustomField[]>;
};
