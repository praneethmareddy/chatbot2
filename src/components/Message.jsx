import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FaUser, FaRobot } from "react-icons/fa";

const Message = ({ message, isUser }) => {
  return (
    <HStack
      justifyContent={isUser ? "flex-end" : "flex-start"} // Align user messages to the right and bot messages to the left
      spacing={2}
      maxW="100%"
      mb={2}
    >
      {/* Bot's message layout */}
      {!isUser && (
        <>
          <Icon as={FaRobot} boxSize={5} color="blue.500" />
          <Box
            bg="gray.200"
            color="black"
            px={4}
            py={2}
            borderRadius="lg"
            maxW="75%"
          >
            <Text fontSize="sm">{message}</Text>
          </Box>
        </>
      )}

      {/* User's message layout */}
      {isUser && (
        <>
          <Box
            bg="blue.500"
            color="white"
            px={4}
            py={2}
            borderRadius="lg"
            maxW="75%"
          >
            <Text fontSize="sm">{message}</Text>
          </Box>
          <Icon as={FaUser} boxSize={5} color="green.500" />
        </>
      )}
    </HStack>
  );
};

export default Message;
