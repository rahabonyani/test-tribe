import { Tab as TabChakra } from '@chakra-ui/react';
import { TabProps } from './types';

const Tab = (props: TabProps) => {
  const { children, borderRightWidth = 1 } = props;
  return (
    <TabChakra
      _focus={{ boxShadow: 'unset' }}
      borderRightWidth={borderRightWidth}
      borderRightColor="gray.200"
      _hover={{ bg: 'gray.50' }}
      _selected={{ borderBottomColor: 'gray.600' }}
    >
      {children}
    </TabChakra>
  );
};

export default Tab;
