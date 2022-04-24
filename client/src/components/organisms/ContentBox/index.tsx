import { Grid, GridItem } from '@chakra-ui/react';
import { contentBoxProps } from './types';

const ContentBox = ({ sideBar, children }: contentBoxProps) => {
  return (
    <Grid h="200px" templateColumns="repeat(9, 1fr)" gap={4}>
      <GridItem colSpan={sideBar ? 6 : 9} pb="4">
        {children}
      </GridItem>
      <GridItem colSpan={3} display={sideBar ? 'grid' : 'none'} bg="white" rounded={10} h="max-content">
        {sideBar}
      </GridItem>
    </Grid>
  );
};

export default ContentBox;
