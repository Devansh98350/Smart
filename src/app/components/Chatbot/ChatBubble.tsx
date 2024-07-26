import React from "react";
import assistant from "../../../../public/images/chatbot/assistant.png";
import user from "../../../../public/images/chatbot/user.png";
import Image from "next/image";
import LoadingDots from "./LoadingDots"; // Import the LoadingDots component

type ChatBubbleProps = {
  key: string;
  content: string;
  role: "User" | "SmartGrader";
  isLoading?: boolean; // Add isLoading prop to manage loading state
};

export default function ChatBubble({
  key,
  content,
  role,
  isLoading,
}: ChatBubbleProps) {
  const isUser = role === "User";
  const alignmentClass = isUser ? "self-end gap-1" : "self-start gap-[8px]";
  const textAlignClass = isUser ? "text-right" : "text-left";
  const messageContainerClass = isUser
    ? "userMessageContainer"
    : "aiMessageContainer";
  const contentClass = isUser
    ? "text-gray-900 dark:text-white"
    : "text-gray-700 dark:text-gray-300";

  return (
    <div
      key={key}
      className={`flex items-start w-fit max-w-[410px] mb-[-2] ${alignmentClass}`}
    >
      {!isUser && ( // Render icon before content for assistant
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 mt-1">
          <Image
            src={assistant}
            alt="AI Assistant"
            layout="fixed"
            width={48}
            height={48}
          />
        </div>
      )}
      <div
        className={`flex items-center justify-${
          isUser ? "end" : "start"
        } space-x-1 rtl:space-x-reverse ${messageContainerClass}`}
      >
        <div
          className={`flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 ${textAlignClass}`}
        >
          <p className={`text-sm font-normal ${contentClass}`}>
            {isLoading ? <LoadingDots /> : content}{" "}
            {/* Show LoadingDots if isLoading */}
          </p>
        </div>
        {isUser && ( // Render icon after content for user
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 mt-1 items-start">
            <Image
              src={user}
              alt="User"
              layout="fixed"
              width={48}
              height={48}
            />
          </div>
        )}
      </div>
    </div>
  );
}
