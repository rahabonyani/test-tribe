import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import PostCard from '../../molecules/PostCard';
import AboutUserBox from '../../molecules/AboutUserBox';
import ContentBox from '../ContentBox';
import EventCard from '../../molecules/EventCard';
import { tabContentsProps } from './types';

const TabsContents = ({ latestPosts, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage }: tabContentsProps) => {
  console.log(latestPosts, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage);
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
            <ContentBox sideBar={<AboutUserBox />}>
              <PostCard />
            </ContentBox>
          </TabPanel>
          <TabPanel p="0">
            <ContentBox sideBar={<AboutUserBox />}>
              <EventCard />
            </ContentBox>
          </TabPanel>
          <TabPanel p="0">
            <ContentBox>
              <Text>Replies</Text>
            </ContentBox>
          </TabPanel>
          <TabPanel p="0">
            <ContentBox>
              <Text>Spaces</Text>
            </ContentBox>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TabsContents;
