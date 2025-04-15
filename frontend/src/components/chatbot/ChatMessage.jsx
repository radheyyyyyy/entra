/* eslint-disable react/prop-types */
import { forwardRef } from 'react';

const ChatMessage = forwardRef(({ message }, ref) => {
  const { text, sender } = message;

  // Function to convert URLs and Markdown-style links to clickable links
  const formatText = (text) => {
    // Split by newlines first
    return text.split('\n').map((line, i) => {
      // Find Markdown-style links [text](url)
      const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const withMarkdownLinks = line.replace(markdownLinkRegex, (match, linkText, url) => {
        return `<a href="${url}" class="markdown-link">${linkText}</a>`;
      });
      
      // Find regular URLs
      const urlRegex = /(https?:\/\/[^\s<]+)/g;
      const parts = withMarkdownLinks.split(/(<a href=".*?<\/a>|https?:\/\/[^\s<]+)/g);
      
      return (
        <span key={i} className="block">
          {parts.map((part, j) => {
            if (part.startsWith('<a href=')) {
              // Extract href and text from our custom markdown link format
              const hrefMatch = part.match(/href="([^"]+)"/);
              const textMatch = part.match(/>([^<]+)</);
              
              if (hrefMatch && textMatch) {
                return (
                  <a
                    key={j}
                    href={hrefMatch[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    {textMatch[1]}
                  </a>
                );
              }
            } else if (part.match(urlRegex)) {
              return (
                <a
                  key={j}
                  href={part}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  {part}
                </a>
              );
            }
            return part;
          })}
        </span>
      );
    });
  };

  return (
    <div 
      ref={ref}
      className={`mb-3 ${sender === 'user' ? 'text-right' : ''}`}
    >
      <div 
        className={`inline-block p-3 rounded-lg max-w-[85%] ${
          sender === 'user' 
            ? 'bg-blue-500 text-white rounded-tr-none' 
            : 'bg-white border border-gray-200 rounded-tl-none text-gray-800'
        }`}
      >
        {formatText(text)}
      </div>
    </div>
  );
});

ChatMessage.displayName = 'ChatMessage';

export default ChatMessage; 