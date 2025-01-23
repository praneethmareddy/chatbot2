import React, { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  VStack,
  Text,
  Icon,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiPlus,
  FiMessageSquare,
  FiHelpCircle,
  FiClock,
  FiSettings,
} from "react-icons/fi";

const Sidebar = ({ onSent, prevPrompts = [], setRecentPrompt, newChat }) => {
  const [extended, setExtended] = useState(false);

  const bg = useColorModeValue("gray.100", "gray.800");
  const hoverBg = useColorModeValue("gray.300", "gray.600");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const loadPreviousPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <Flex
      direction="column"
      bg={bg}
      h="100vh"
      w={extended ? "250px" : "60px"}
      transition="width 0.2s"
      borderRight="1px solid"
      borderColor={borderColor}
      justify="space-between"
      boxShadow="md"
    >
      {/* Top Section */}
      <VStack align="stretch" p={4} spacing={4}>
        {/* Menu Icon */}
        <IconButton
          icon={<FiMenu />}
          aria-label="Toggle menu"
          variant="ghost"
          size="sm"
          onClick={() => setExtended((prev) => !prev)}
        />

        {/* New Chat */}
        <Flex
          align="center"
          gap={4}
          cursor="pointer"
          p={1}
          borderRadius="md"
          _hover={{ bg: hoverBg }}
          onClick={newChat}
        >
          <Icon as={FiPlus} boxSize={5} />
          {extended && <Text fontSize="sm">New Chat</Text>}
        </Flex>

        {/* Recent Chats */}
        {extended && (
          <Box>
            <Text fontWeight="bold" mb={2}>
              Recent
            </Text>
            {prevPrompts.map((item, index) => (
              <Flex
                key={index}
                align="center"
                gap={2}
                p={1}
                borderRadius="md"
                _hover={{ bg: hoverBg }}
                cursor="pointer"
                onClick={() => loadPreviousPrompt(item)}
              >
                <Icon as={FiMessageSquare} boxSize={4} />
                <Text fontSize="sm" noOfLines={1}>
                  {item.slice(0, 18)}...
                </Text>
              </Flex>
            ))}
          </Box>
        )}
      </VStack>

      {/* Bottom Section */}
      <VStack align="stretch" p={4} spacing={4}>
        <Tooltip label="Help Desk" isDisabled={extended}>
          <Flex
            align="center"
            gap={4}
            cursor="pointer"
            p={1}
            borderRadius="md"
            _hover={{ bg: hoverBg }}
          >
            <Icon as={FiHelpCircle} boxSize={5} />
            {extended && <Text fontSize="sm">Help Desk</Text>}
          </Flex>
        </Tooltip>

        <Tooltip label="History" isDisabled={extended}>
          <Flex
            align="center"
            gap={4}
            cursor="pointer"
            p={1}
            borderRadius="md"
            _hover={{ bg: hoverBg }}
          >
            <Icon as={FiClock} boxSize={5} />
            {extended && <Text fontSize="sm">History</Text>}
          </Flex>
        </Tooltip>

        <Tooltip label="Settings" isDisabled={extended}>
          <Flex
            align="center"
            gap={4}
            cursor="pointer"
            p={1}
            borderRadius="md"
            _hover={{ bg: hoverBg }}
          >
            <Icon as={FiSettings} boxSize={5} />
            {extended && <Text fontSize="sm">Settings</Text>}
          </Flex>
        </Tooltip>
      </VStack>
    </Flex>
  );
};

export default Sidebar;
