import type { PaginatedPost, Post } from '@tribeplatform/gql-client/types';
import type { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query/types/core';

export type PostsProps = {
  isLoading: boolean;
  fetchNextPage: (options?: FetchNextPageOptions | undefined) => Promise<InfiniteQueryObserverResult<PaginatedPost, unknown>>;
  isFetchingNextPage: boolean;
  hasNextPage?: boolean;
  latestPosts: Post[];
};
