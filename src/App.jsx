import React, { useState } from "react";
import Sidebar from "./components/SideBar";
import ChatContainer from "./components/ChatContainer";
import MessageContainer from "./components/MessageContainer";
import MessageInput from "./components/MessageInput";
import SampleQuestions from "./components/SampleQuestions";
import Message from "./components/Message";
import {

  Flex,Box
  
} from "@chakra-ui/react";
import "./App.css"
const App = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);

  const handleSend = (text) => {
    setMessages([
      ...messages,
      <Message key={messages.length} message={text} isUser={true} />,
    ]);
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const botResponse = `Here's what I found: ${text}`;
      setMessages((prev) => [
        ...prev,
        <Message key={prev.length} message={botResponse} isUser={false} />,
      ]);
      setPrevPrompts((prev) => [...prev, text]); // Store the user's prompt
      setLoading(false);
    }, 2000);
  };

  const newChat = () => {
    setMessages([]);
    setRecentPrompt("");
  };

  return (
    <Flex h="100vh" w="100vw" overflow="hidden">
      <Sidebar
        onSent={handleSend}
        prevPrompts={prevPrompts}
        setRecentPrompt={setRecentPrompt}
        newChat={newChat}
      />
      <ChatContainer isLoading={loading}>
        {!messages.length && !loading ? (
          <Box
      flex="1"
      overflowY="auto"
      p={4}
      bg="gray.50"
      borderRadius="md"
      minH="70vh"
      maxH="70vh" // Optional: To constrain the height of the message area
    >
          
          <Box>
          <SampleQuestions onClick={handleSend} />
          <div className="greet">
							<p>
								<span>Hello , Dev </span>
							</p>
							<p>How Can i Help You Today?</p>
						</div>
            </Box>
        </Box>
        ) : (
          <MessageContainer messages={messages} isLoading={loading} />
        )}
        <MessageInput onSend={handleSend} isLoading={loading} />
      </ChatContainer>
    </Flex>
  );
};

export default App;
