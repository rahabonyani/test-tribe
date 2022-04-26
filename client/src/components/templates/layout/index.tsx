import { Flex, Container, Grid, GridItem, VStack } from '@chakra-ui/react';
import Header from '../../organisms/Header';
import Sidebar from '../../organisms/Sidebar';
import { layoutProps } from './types';

const Layout = ({ children }: layoutProps) => {
  return (
    <VStack flexDirection="column" w="100vw" minH="100vh" spacing="0" m={0} overflowX="hidden">
      <Flex width="full" bg="yellow.200" height="16" boxShadow="base">
        <Header />
      </Flex>
      <Container maxW="container.xl" width="100%" h="calc(100vh - 80px)" pt="6" mx="0">
        <Grid templateColumns="repeat(12, 1fr)" gap={4} h="100%" width="100%">
          <GridItem colSpan={3}>
            <Sidebar />
          </GridItem>
          <GridItem colSpan={9}>{children}</GridItem>
        </Grid>
      </Container>
    </VStack>
  );
};

export default Layout;
