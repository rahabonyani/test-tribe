import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';

const TabsContents = () => {
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
          <TabPanel bg="white" rounded={10} >
            <Text>Post!</Text>
          </TabPanel>
          <TabPanel bg="white" rounded={10} >
            <Text>Event!</Text>
          </TabPanel>
          <TabPanel bg="white" rounded={10} >
            <Text>Replies!</Text>
          </TabPanel>
          <TabPanel bg="white" rounded={10} >
            <Text>Spaces!</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TabsContents;
