import { SimpleGrid, Box, Text, Image } from "@chakra-ui/react";

const SampleQuestions = ({ onClick }) => {
  const sampleQuestions = [
    "How do you create a responsive navbar using CSS and JavaScript?",
    "What is the difference between React and Angular?",
    "How does Chakra UI simplify development?",
    "Tell me a joke!",
  ];

  return (
    <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} mt={4} className="main cards">
      {sampleQuestions.map((question, index) => (
        <Box
          key={index}
          className="card"
          bg="#f0f4f9"
          borderRadius="10px"
          p={4}
          cursor="pointer"
          position="relative"
          height="6rem"
          _hover={{ bg: "#dfe4ea" }}
          onClick={() => onClick(question)}
        >
          <Text fontSize="17px" color="#585858" mb={2}>
            {question}
          </Text>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3566/3566345.png" // Sample icon
            alt="Question Icon"
            w="35px"
            h="35px"
            position="absolute"
            bottom="10px"
            right="10px"
            borderRadius="20px"
            bg="white"
            p="5px"
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default SampleQuestions;
