import React, { useState } from "react";
import {
  Box,
  Text,
  VStack,
  Link,
  Icon,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import {
  ChevronRightIcon,
  SettingsIcon,
  SunIcon,
  PlusSquareIcon,
  TimeIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true); // Initial state is open

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <Box
      //   bg="black"
      w={isOpen ? "250px" : "0"} // Adjust the width based on isOpen state
      h="100vh"
      p={4}
      overflowX="hidden" // Hide overflow when closed
      transition="0.5s" // Add a smooth transition effect
    >
      <IconButton
        icon={<HamburgerIcon />}
        aria-label="Toggle Sidebar"
        onClick={toggleSidebar}
        size="md"
      />
      {isOpen && (
        <VStack spacing={4} align="start">
          <Link>
            <Icon as={PlusSquareIcon} />
            <Text>Learning Path</Text>
          </Link>
          <Link>
            <Icon as={SunIcon} />
            <Text>Courses</Text>
          </Link>
          <Link>
            <Icon as={SettingsIcon} />
            <Text>Settings</Text>
          </Link>
        </VStack>
      )}
      <Spacer />
      {isOpen && (
        <Link>
          <Icon as={TimeIcon} />
          <Text>Logout</Text>
        </Link>
      )}
    </Box>
  );
};

export default Sidebar;
