import { PaginatedPost, Post } from '@tribeplatform/gql-client/types';
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query/types/core';

export type tabContentsProps = {
  latestPosts: Post[];
  isLoading: boolean;
  fetchNextPage: (options?: FetchNextPageOptions | undefined) => Promise<InfiniteQueryObserverResult<PaginatedPost, unknown>>;
  hasNextPage?: boolean;
  isFetchingNextPage: boolean;
};
