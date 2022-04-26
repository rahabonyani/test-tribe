import { Box, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import AboutUserBox from '../../molecules/AboutUserBox';
import ContentBox from '../ContentBox';
import type { TabContentsProps } from './types';
import Tab from '../../atoms/Tab';
import Posts from '../../molecules/Posts';
import Events from '../../molecules/Events';

const TabsContents = (props: TabContentsProps) => {
  const { latestPosts, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage, tagline, email, createdAt, fields } = props;

  return (
    <Box borderTopWidth={1} borderTopColor="gray.200">
      <Tabs isFitted>
        <TabList mb="1em" bg="white" roundedBottom={10} overflowY="hidden" pb={0.5} borderBottomWidth={0}>
          <Tab>Post</Tab>
          <Tab>Event</Tab>
          <Tab>Replies</Tab>
          <Tab borderRightWidth={0}>Spaces</Tab>
        </TabList>
        <TabPanels>
          <TabPanel p="0">
            <ContentBox sideBar={<AboutUserBox isLoading={isLoading} tagline={tagline} since={createdAt} email={email} fields={fields} />}>
              <Posts
                isLoading={isLoading}
                hasNextPage={hasNextPage}
                fetchNextPage={fetchNextPage}
                isFetchingNextPage={isFetchingNextPage}
                latestPosts={latestPosts}
              />
            </ContentBox>
          </TabPanel>
          <TabPanel p="0">
            <ContentBox sideBar={<AboutUserBox isLoading={isLoading} tagline={tagline} since={createdAt} email={email} fields={fields} />}>
              <Events
                isLoading={isLoading}
                hasNextPage={hasNextPage}
                fetchNextPage={fetchNextPage}
                isFetchingNextPage={isFetchingNextPage}
                latestPosts={latestPosts}
              />
            </ContentBox>
          </TabPanel>
          <TabPanel p="0">
            <ContentBox>
              <Text textAlign="center" bg="white" boxShadow="md" rounded={10} p="10">
                There is no Replies
              </Text>
            </ContentBox>
          </TabPanel>
          <TabPanel p="0">
            <ContentBox>
              <Text textAlign="center" bg="white" boxShadow="md" rounded={10} p="10">
                There is no Spaces
              </Text>
            </ContentBox>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TabsContents;
