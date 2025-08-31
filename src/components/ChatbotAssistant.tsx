import React, { useState } from 'react';
import { MessageCircle, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const ChatbotAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hello! I'm here to support you on your wellness journey. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const botResponses = {
    stress: "It's completely normal to feel stressed sometimes. Try taking deep breaths, going for a walk, or talking to someone you trust. Would you like me to guide you through a quick breathing exercise?",
    anxiety: "Anxiety can feel overwhelming, but you're not alone. Consider grounding techniques like naming 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste.",
    sleep: "Good sleep is crucial for wellbeing. Try establishing a bedtime routine, avoiding screens an hour before bed, and creating a calm environment. Aim for 7-9 hours of sleep.",
    motivation: "Motivation can come and go, and that's okay. Start with small, achievable goals and celebrate every victory, no matter how small. What's one tiny step you could take today?",
    study: "Effective studying involves breaks, a good environment, and realistic goals. Try the Pomodoro technique: 25 minutes of focused work followed by a 5-minute break.",
    default: "I understand you're going through something. Remember that seeking help is a sign of strength. Would you like to talk about what's on your mind, or shall I connect you with our counsellor booking system?"
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('stress') || message.includes('stressed')) return botResponses.stress;
    if (message.includes('anxious') || message.includes('anxiety') || message.includes('worry')) return botResponses.anxiety;
    if (message.includes('sleep') || message.includes('tired') || message.includes('insomnia')) return botResponses.sleep;
    if (message.includes('motivation') || message.includes('unmotivated') || message.includes('lazy')) return botResponses.motivation;
    if (message.includes('study') || message.includes('exam') || message.includes('assignment')) return botResponses.study;
    
    return botResponses.default;
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: generateResponse(inputValue),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg h-[600px] flex flex-col">
      <div className="flex items-center p-6 border-b border-gray-200">
        <MessageCircle className="w-6 h-6 text-blue-500 mr-3" />
        <h2 className="text-2xl font-semibold text-gray-800">AI Wellness Assistant</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start max-w-xs lg:max-w-md ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                message.type === 'user' ? 'bg-blue-500 ml-2' : 'bg-green-500 mr-2'
              }`}>
                {message.type === 'user' ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>
              
              <div className={`p-3 rounded-2xl ${
                message.type === 'user'
                  ? 'bg-blue-500 text-white rounded-tr-sm'
                  : 'bg-gray-100 text-gray-800 rounded-tl-sm'
              }`}>
                <p className="text-sm leading-relaxed">{message.content}</p>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start max-w-xs lg:max-w-md">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 mr-2 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 border-t border-gray-200">
        <div className="flex space-x-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim() || isTyping}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white p-3 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:transform-none shadow-lg hover:shadow-xl"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotAssistant;