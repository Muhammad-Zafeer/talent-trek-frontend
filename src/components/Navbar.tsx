// Import necessary Chakra UI components
import { HStack, Image, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons"; // You'll need to import the search icon if you haven't already
import ColorModeSwitch from './ColorModeSwitch';
import logo from "../assets/a.jpg";

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='60px' />

      {/* Search bar */}
      <InputGroup maxW="500px">
        <InputLeftElement
          pointerEvents='none'
          children={<SearchIcon color='gray.300' />}
        />
        <Input
          type='text'
          placeholder='Search...'
          size='sm'
          border='none'
          boxShadow='md'
          _focus={{ boxShadow: 'outline' }}
        />
      </InputGroup>

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
