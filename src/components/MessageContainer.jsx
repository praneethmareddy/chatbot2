import React, { useEffect, useRef } from "react";
import { Box ,HStack,Skeleton } from "@chakra-ui/react";

const MessageContainer = ({ messages ,isLoading}) => {
  const bottomRef = useRef(null); // Ref to track the bottom of the container

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box
      flex="1"
      overflowY="auto"
      p={4}
      bg="gray.50"
      borderRadius="md"
      minH="70vh"
      maxH="70vh" // Optional: To constrain the height of the message area
    >
      {messages.map((message, index) => (
        <React.Fragment key={index}>{message}</React.Fragment>
      ))}
      {isLoading && (
        <HStack
          justifyContent="flex-start" // Skeleton aligns like a bot message
          spacing={2}
          maxW="100%"
          mb={2}
        >
        <Skeleton
  height="30px"
  width="60%"
  borderRadius="lg"
  startColor="gray.200" // Lighter start color
  endColor="gray.400"  // Lighter end color
  opacity={0.6}        // Slightly reduce opacity
/>

        </HStack>
      )}
      {/* Invisible div to ensure we scroll to the bottom */}
      <div ref={bottomRef}></div>
    </Box>
  );
};

export default MessageContainer;
