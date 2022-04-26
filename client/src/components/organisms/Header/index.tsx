import { Avatar, Container, Grid, GridItem, } from '@chakra-ui/react';
import SearchInput from '../../atoms/SearchInput';
import Tools from '../../molecules/Tools';
import { headerProps } from './types';

const Header = ({ logo }: headerProps) => {
  return (
    <Container maxW="container.xl" width="100%" mx="auto">
      <Grid templateColumns="repeat(12, 1fr)" gap={0} width="100%">
        <GridItem colSpan={3} my="auto">
          <Avatar size="md" src={logo} bg="white" />
        </GridItem>
        <GridItem colSpan={6} my="auto">
          <SearchInput />
        </GridItem>
        <GridItem colSpan={3}>
          <Tools />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Header;
