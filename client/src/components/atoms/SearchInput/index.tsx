import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';

const SearchInput = () => {
  return (
    <InputGroup w="100%" my="auto" boxShadow="base">
      <InputLeftElement pointerEvents="none" fontSize="xl"  children={<BiSearch color="gray.300"/>} />
      <Input type="tel" w="100%" placeholder="Search..." borderColor="gray.600" />
    </InputGroup>
  );
};

export default SearchInput;
