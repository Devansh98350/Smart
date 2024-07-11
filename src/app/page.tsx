'use client';

import { useState, useEffect, useRef } from 'react';
import { useChat } from 'ai/react'; // Adjust import as per your actual useChat implementation
import ChatBubble from '../app/components/ChatBubble';
import MessageIcon from '@mui/icons-material/Message';
import CloseIcon from '@mui/icons-material/Close';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { messages, input, setInput, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSpeechToText = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      recognition.start();

      recognition.onresult = (event: any) => {
        const speechResult = event.results[0][0].transcript;
        setInput(speechResult);
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event);
      };

      recognition.onspeechend = () => {
        recognition.stop();
        handleSubmit(); // Submit the input to the chat
      };
    } else {
      alert('Sorry, your browser does not support speech recognition!');
    }
  };

  return (
    <div>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-10 bg-blue-500 text-white p-4 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-115 flex items-center justify-center"
      >
        {isChatOpen ? <CloseIcon /> : <MessageIcon />}
      </button>

      {isChatOpen && (
        <div className="fixed bottom-[90px] right-4 w-[400px] h-[440px] bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
          <div className="flex justify-between items-center p-3 bg-blue-500 text-white rounded-t-lg">
            <h4 className="text-lg font-bold">Chat with Devanshu</h4>
          </div>
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 flex flex-col space-y-4">
            {messages.map((m, index) => (
              <ChatBubble
                key={`message-${index}`} // Ensure key is a string
                role={m.role === 'user' ? 'User' : 'SmartGrader'}
                content={m.content}
              />
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="p-2 flex items-center"
          >
            <div className="flex w-full border border-gray-300 rounded shadow-sm">
              <button
                type="button"
                className="p-2 bg-white text-blue-500 flex items-center justify-center"
                onClick={handleSpeechToText}
              >
                <MicIcon />
              </button>
              <input
                className="flex-1 p-2 border-none rounded-l focus:outline-none"
                value={input}
                placeholder="Say something..."
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="p-2 bg-white text-blue-500 rounded-r flex items-center justify-center"
              >
                <SendIcon />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
