"use client";

import { useState, useEffect, useRef } from "react";
import { useChat } from "ai/react";
import ChatBubble from "./ChatBubble";
import MessageIcon from "@mui/icons-material/Message";
import CloseIcon from "@mui/icons-material/Close";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import { Message } from "../../types/message";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const initialPredefinedQuestions = [
  "How do I create an account on SmartGrader?",
  "Can you explain how the AI feedback feature works?",
  "What are the subscription plans available for educational institutions?",
  "How do I track my progress on the SmartGrader platform?",
];

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [history, setHistory] = useState<Message[]>([
    {
      role: "SmartGrader",
      content: "Hello! How can I help you?",
    },
  ]);
  const [predefinedQuestions, setPredefinedQuestions] = useState(
    initialPredefinedQuestions
  );
  const { messages, input, setInput, handleInputChange, handleSubmit } =
    useChat({
      api: "../api/chat",
    });

  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, history]);

  const handlePredefinedQuestionClick = async (question: string) => {
    setInput(question);
    setPredefinedQuestions([]);
    setIsInputDisabled(false);
    await new Promise((resolve) => setTimeout(resolve, 0));
    formRef.current?.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
  };

  const handleSpeechToText = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";
      recognition.start();

      recognition.onresult = (event: any) => {
        const speechResult = event.results[0][0].transcript;
        setInput(speechResult);
        setIsInputDisabled(false);
        new Promise((resolve) => setTimeout(resolve, 0)).then(() => {
          formRef.current?.dispatchEvent(
            new Event("submit", { cancelable: true, bubbles: true })
          );
        });
      };

      recognition.onerror = (event: any) => {
        console.error("Speech recognition error", event);
        alert("An error occurred with speech recognition. Please try again.");
      };

      recognition.onspeechend = () => {
        recognition.stop();
      };
    } else {
      alert("Sorry, your browser does not support speech recognition!");
    }
  };

  return (
    <div>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-10 bg-blue-500 text-white p-4 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-115 flex items-center justify-center"
        aria-label={isChatOpen ? "Close chat" : "Open chat"}
      >
        {isChatOpen ? <CloseIcon /> : <MessageIcon />}
      </button>

      {isChatOpen && (
        <div className="fixed bottom-[90px] right-4 w-full max-w-[400px] h-[440px] bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
          <div className="flex justify-between items-center p-3 bg-blue-500 text-white rounded-t-lg">
            <h4 className="text-lg font-bold">Chat with SmartGrader</h4>
          </div>
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 flex flex-col space-y-4"
          >
            {[...history, ...messages].map((m, index) => (
              <ChatBubble
                key={`message-${index}`}
                role={m.role === "user" ? "User" : "SmartGrader"}
                content={m.content}
              />
            ))}
            {history.length === 1 && predefinedQuestions.length > 0 && (
              <div className="space-y-2">
                {predefinedQuestions.map((question, index) => (
                  <button
                    key={`question-${index}`}
                    onClick={() => handlePredefinedQuestionClick(question)}
                    className="block w-full text-left bg-gray-100 hover:bg-gray-200 p-1.5 rounded"
                    style={{ fontSize: "12px" }}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
          </div>
          <form
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
            className="p-2 flex items-center"
          >
            <div className="flex w-full border border-gray-300 rounded shadow-sm">
              <button
                type="button"
                className="p-2 bg-white text-blue-500 flex items-center justify-center"
                onClick={handleSpeechToText}
                disabled={isInputDisabled}
                aria-label="Start speech recognition"
              >
                <MicIcon />
              </button>
              <input
                className={`flex-1 p-2 border-none rounded-l focus:outline-none ${
                  isInputDisabled ? "cursor-not-allowed" : ""
                }`}
                value={input}
                placeholder="Say something..."
                onChange={handleInputChange}
                disabled={isInputDisabled}
                aria-label="Chat input"
              />
              <button
                type="submit"
                className={`p-2 bg-white rounded-r flex items-center justify-center ${
                  input ? "text-blue-500" : "text-white"
                }`}
                disabled={isInputDisabled}
                aria-label="Send message"
              >
                <SendIcon />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
