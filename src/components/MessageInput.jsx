import { Box, Input, IconButton, Skeleton } from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";
import { useState } from "react";
const MessageInput = ({ onSend, isLoading }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim() && !isLoading) {
      onSend(inputValue);
      setInputValue(""); // Clear the input after sending
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !isLoading) {
      handleSend();
    }
  };

  return (
    <Box mt={4} display="flex" alignItems="center" gap={2}>
      {/* {isLoading ? (
        // Show skeleton instead of input when loading
        <Skeleton height="40px" flex="1" borderRadius="md" />
      ) : ( */}
        <Input
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          flex="1"
          borderRadius="md"
        />
      {/* )} */}

      {/* Send icon */}
      <IconButton
        aria-label="Send"
        icon={<FiSend />}
        colorScheme="blue"
        borderRadius="full"
        onClick={handleSend}
        isDisabled={!inputValue.trim() || isLoading} // Disable if input is empty or loading
      />
    </Box>
  );
};

export default MessageInput;
