import React from 'react';
import { Box, Button, Code, useClipboard, VStack, useColorMode, Text } from '@chakra-ui/react';
import ReactMarkdown  from 'react-markdown';
import { CopyIcon } from '@chakra-ui/icons';

const MessageDisplay = ({ message }) => {
  const { hasCopied, onCopy } = useClipboard('');
  const { colorMode } = useColorMode(); // Access light or dark mode
  
  const renderMarkdown = (text) => {
    return (
     
      <ReactMarkdown
        children={text}
        components={{
          code({ inline, children, ...props }) {
            return inline ? (
              <Code {...props} fontSize="sm" fontFamily="monospace" borderRadius="sm">
                {children}
              </Code>
            ) : (
              <Box position="relative" mb={4} p={4} bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'} borderRadius="sm">
                <Code as="pre" fontFamily="monospace" fontSize="sm" overflowX="auto" whiteSpace="pre-wrap"  bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}>
                  {children}
                </Code>
                <Button
                  position="absolute"
                  top={1}
                  right={1}
                  size="xs"
                  onClick={() => { onCopy(children); }}
                  
                  variant="ghost"
                  colorScheme="teal"
                >
                  {hasCopied ? ' ✔' : <CopyIcon />}
                </Button>
              </Box>
            );
          },
        }}
      />
    );
  };

  return (
    <VStack align="start" borderRadius="sm" >
      {/* Display the formatted message */}
      {renderMarkdown(message)}
    </VStack>
  );
};

export default MessageDisplay;