import InfiniteScroll from 'react-infinite-scroller';
import PostCard from '../PostCard';
import { Text } from '@chakra-ui/react';
import type { PostsProps } from './types';

const Posts = (props: PostsProps) => {
  const { isLoading, hasNextPage, fetchNextPage, isFetchingNextPage, latestPosts } = props;
  return (
    <>
      {isLoading ? (
        <Text textAlign="center">Loading...</Text>
      ) : (
        <InfiniteScroll
          pageStart={0}
          hasMore={hasNextPage}
          loadMore={() => fetchNextPage()}
          loader={
            <Text color="gray.400" key={0}>
              {isFetchingNextPage && `Loading...`}
            </Text>
          }
        >
          {latestPosts.map(post => {
            console.log(post);
            return (
              <PostCard
                key={post.id}
                name={post.owner?.member?.name}
                title={post.title}
                tagline={post.owner?.member?.tagline}
                shortContent={post.shortContent}
                profilePicture={post.owner?.member?.profilePicture}
              />
            );
          })}
        </InfiniteScroll>
      )}
    </>
  );
};

export default Posts;
