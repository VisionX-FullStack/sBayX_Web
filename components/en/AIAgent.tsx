'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function AIAgent() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content:
        'Hi! I\'m the sBayX AI Assistant, here to help you with any questions about our North American expansion services, including bonded warehousing, business incubation, compliance operations, and more. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const normalize = (s: string) => s.toLowerCase().trim();

  const matchNavigationIntent = (raw: string): { route: string; label: string } | null => {
    const s = normalize(raw);

    const hits = [
      {
        route: '/en#overview',
        label: 'About Us',
        keys: ['about', 'about us', 'who are you', 'company']
      },
      {
        route: '/en/services',
        label: 'Services',
        keys: ['service', 'services', 'what do you offer', 'offerings']
      },
      {
        route: '/en/operation-plan',
        label: 'Operation Plan',
        keys: ['operation', 'operation plan', 'operations', 'team']
      },
      {
        route: '/en/silicon-valley-campus',
        label: 'Silicon Valley Campus',
        keys: ['silicon', 'silicon valley', 'campus', 'office']
      },
      {
        route: '/en/resources',
        label: 'Resources',
        keys: ['resource', 'resources', 'guide', 'report', 'toolkit']
      }
    ];

    for (const item of hits) {
      if (item.keys.some(k => s.includes(k.toLowerCase()))) {
        return { route: item.route, label: item.label };
      }
    }
    return null;
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes('service') || input.includes('offer') || input.includes('what do you do')) {
      return 'We provide a full suite of North American expansion services, including:\n• Bonded warehousing (1M㎡ of storage space)\n• Business incubation & acceleration\n• Compliance operations guidance\n• Market research & positioning\n• Legal & tax consulting\n• Talent recruitment services';
    }
    if (input.includes('warehouse') || input.includes('storage') || input.includes('logistics')) {
      return 'We operate 1M㎡ of bonded warehouse space across 7 service bases, offering:\n• Smart warehouse management systems\n• 24/7 monitoring\n• Expedited customs clearance\n• Flexible storage solutions\n• Cost-optimized logistics';
    }
    if (input.includes('incubat') || input.includes('startup') || input.includes('accelerat')) {
      return 'We have successfully incubated 100+ enterprises, providing:\n• Office space & infrastructure\n• Business network connections\n• Fundraising consulting\n• Technology transfer support\n• Market entry strategies\n• Ongoing operational guidance';
    }
    if (input.includes('compli') || input.includes('legal') || input.includes('tax')) {
      return 'With 500+ professionals on our team, we offer comprehensive compliance services:\n• US legal compliance consulting\n• Tax planning & filing\n• Intellectual property protection\n• Data privacy compliance\n• Antitrust compliance\n• Environmental regulatory adherence';
    }
    if (input.includes('price') || input.includes('cost') || input.includes('fee') || input.includes('pricing')) {
      return 'Our pricing is transparent and competitive:\n• Warehousing: billed by space used and duration\n• Incubation services: base package + add-ons\n• Compliance consulting: priced by project complexity\n• Flexible payment plans available\n• First-month discount for new clients';
    }
    if (input.includes('contact') || input.includes('phone') || input.includes('email') || input.includes('reach')) {
      return 'You can reach us through the following channels:\n• US Phone: +1 (650) 690-2661\n• China Phone: +86 18676379410\n• Email: support@sBayX.com\n• Book online: click the "Get in Touch" button\n• WeChat: scan the QR code on our website\n• Business hours: Mon–Fri, 9:00 AM – 6:00 PM';
    }
    if (input.includes('case') || input.includes('success') || input.includes('client') || input.includes('customer')) {
      return 'We have helped many enterprises successfully expand to North America:\n• Tech company: completed North American market setup in 3 months\n• Manufacturer: 300% annual revenue growth\n• E-commerce platform: surpassed 1M users\n• Services firm: secured $5M Series A funding';
    }
    if (input.includes('resource') || input.includes('guide') || input.includes('report') || input.includes('toolkit')) {
      return 'We offer a rich resource library, including:\n• Complete Guide to Entering the North American Market\n• 2024 Chinese Enterprise Expansion Trends Report\n• Legal Compliance Checklist\n• Business Plan Template\n• Cultural Integration Webinar\n• Manufacturing Success Case Study\n• North American Business Ecosystem Navigator\n\nVisit the "Resources & Insights" section on our website to access all materials.';
    }
    return 'Thank you for reaching out! If you need specific service details, pricing information, or would like to book a consultation, please let me know your requirements and I\'ll provide more information. You can also click the "Get in Touch" button and our team will follow up with you shortly.';
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    const text = inputValue;
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    const nav = matchNavigationIntent(text);

    if (nav) {
      const jumping: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: `Got it! Taking you to ${nav.label}…`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, jumping]);
      setIsTyping(false);

      setTimeout(() => {
        router.push(nav.route);
      }, 800);

      return;
    }

    setTimeout(() => {
      const aiResponse = generateAIResponse(text);
      const assistantMessage: Message = {
        id: (Date.now() + 2).toString(),
        type: 'assistant',
        content: aiResponse
        ,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        style={{
          background: 'linear-gradient(135deg, #2563eb, #0891b2)',
          boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)'
        }}
        aria-label="Open AI Assistant"
      >
        <div className="relative">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm">
          AI Assistant
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col border border-gray-200">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">sBayX AI Assistant</h3>
                  <p className="text-sm text-blue-100">Online & ready to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close AI Assistant"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white rounded-br-md'
                        : 'bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-200'
                    }`}
                  >
                    <div className="whitespace-pre-line text-sm">{message.content}</div>
                    <div
                      className={`text-xs mt-2 ${
                        message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 p-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-200">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your question..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Send message"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {['Our Services', 'Warehouse Costs', 'Success Stories', 'Resources', 'Contact Us', 'About Us', 'Operation Plan', 'Silicon Valley'].map(q => (
                  <button
                    key={q}
                    onClick={() => setInputValue(q)}
                    className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
