import { Box, VStack, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // Array of link data
  const navLinks = [
    { label: "Overview", path: "/" },
    { label: "Expenses", path: "/expenses" },
    { label: "Income", path: "/income" },
  ];

  return (
    <Box as="nav" bg="lightGrey" minW="30%" p="4" shadow="lg">
      <VStack spacing={8} align="start">
        <Text fontWeight="bold" fontSize="lg">
          Dashboard
        </Text>

        {/* Mapping through the array of links */}
        {navLinks.map((link) => (
          <ChakraLink
            as={Link}
            to={link.path}
            key={link.path}
            p={2}
            borderRadius="md"
            fontWeight="medium"
            _hover={{ bg: "blue.500", color: "white" }}
            w="100%"
          >
            {link.label}
          </ChakraLink>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
