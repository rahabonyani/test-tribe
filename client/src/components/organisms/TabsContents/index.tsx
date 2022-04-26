import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import PostCard from '../../molecules/PostCard';
import AboutUserBox from '../../molecules/AboutUserBox';
import ContentBox from '../ContentBox';
import EventCard from '../../molecules/EventCard';
import { tabContentsProps } from './types';
import InfiniteScroll from 'react-infinite-scroller';

const TabsContents = (props: tabContentsProps) => {
  const { latestPosts, isLoading, fetchNextPage, isFetchingNextPage, tagline, email, createdAt, fields } = props;
  console.log(latestPosts);
  return (
    <Box borderTopWidth={1} borderTopColor="gray.200">
      <Tabs isFitted>
        <TabList mb="1em" bg="white" roundedBottom={10} overflowY="hidden" pb={0.5} borderBottomWidth={0}>
          <Tab
            _focus={{ boxShadow: 'unset' }}
            borderRightWidth={1}
            borderRightColor="gray.200"
            _hover={{ bg: 'gray.50' }}
            _selected={{ borderBottomColor: 'gray.600' }}
          >
            Post
          </Tab>
          <Tab
            _focus={{ boxShadow: 'unset' }}
            borderRightWidth={1}
            borderRightColor="gray.200"
            _hover={{ bg: 'gray.50' }}
            _selected={{ borderBottomColor: 'gray.600' }}
          >
            Event
          </Tab>
          <Tab
            _focus={{ boxShadow: 'unset' }}
            borderRightWidth={1}
            borderRightColor="gray.200"
            _hover={{ bg: 'gray.50' }}
            _selected={{ borderBottomColor: 'gray.600' }}
          >
            Replies
          </Tab>
          <Tab _focus={{ boxShadow: 'unset' }} _hover={{ bg: 'gray.50' }} _selected={{ borderColor: 'gray.600' }}>
            Spaces
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel p="0">
            <ContentBox sideBar={<AboutUserBox isLoading={isLoading} tagline={tagline} since={createdAt} email={email} fields={fields} />}>
              {isLoading ? (
                <Text textAlign="center">Loading...</Text>
              ) : (
                <InfiniteScroll
                  pageStart={0}
                  hasMore={true || false}
                  loadMore={() => fetchNextPage()}
                  loader={
                    <Text color="gray.400" key={0}>
                      {isFetchingNextPage && `Loading...`}
                    </Text>
                  }
                >
                  {latestPosts.map((post, index) => (
                    <PostCard key={post.id} />
                  ))}
                </InfiniteScroll>
              )}
              {/* <PostCard /> */}
            </ContentBox>
          </TabPanel>
          <TabPanel p="0">
            <ContentBox sideBar={<AboutUserBox isLoading={isLoading} tagline={tagline} since={createdAt} email={email} fields={fields} />}>
              {isLoading ? (
                <Text textAlign="center">Loading...</Text>
              ) : (
                <InfiniteScroll
                  pageStart={0}
                  hasMore={true || false}
                  loadMore={() => fetchNextPage()}
                  loader={
                    <Text color="gray.400" key={0}>
                      {isFetchingNextPage && `Loading...`}
                    </Text>
                  }
                >
                  {latestPosts.map((post, index) => (
                    <PostCard key={post.id} />
                  ))}
                </InfiniteScroll>
              )}
            </ContentBox>
          </TabPanel>
          <TabPanel p="0">
            <ContentBox>
              <Text textAlign="center" bg="white" boxShadow="md" rounded={10} p="10">There is no Replies</Text>
            </ContentBox>
          </TabPanel>
          <TabPanel p="0">
            <ContentBox>
              <Text textAlign="center" bg="white" boxShadow="md" rounded={10} p="10">There is no Spaces</Text>
            </ContentBox>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TabsContents;
