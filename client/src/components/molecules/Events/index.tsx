import InfiniteScroll from 'react-infinite-scroller';
import { Text } from '@chakra-ui/react';
import type { EventsProps } from './types';
import EventCard from '../EventCard';

const Events = (props: EventsProps) => {
  const { isLoading, hasNextPage, fetchNextPage, isFetchingNextPage, latestPosts } = props;
  
  return (
    <>
      {isLoading ? (
        <Text textAlign="center" w="full">
          Loading...
        </Text>
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
          {latestPosts.map(event => (
            <EventCard
              key={event.id}
              name={event.owner?.member?.name}
              title={event.title}
              tagline={event.owner?.member?.tagline}
              shortContent={event.shortContent}
              profilePicture={event.owner?.member?.profilePicture}
            />
          ))}
        </InfiniteScroll>
      )}
    </>
  );
};

export default Events;
