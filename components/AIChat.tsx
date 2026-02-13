
import React, { useState, useRef, useEffect } from 'react';
import { getAIAssponse } from '../services/gemini';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'ai', content: string}[]>([
    { role: 'ai', content: "I am the Kent Concierge. Ask me anything about Clark's work or availability." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);

    const aiResponse = await getAIAssponse(userMsg);
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
  };

  return (
    <section id="ai" className="py-32 bg-[#0d0d0d] border-y border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <span className="text-purple-500 font-bold tracking-[0.4em] text-xs uppercase">Experimental Interface</span>
          <h2 className="font-syncopate text-4xl md:text-5xl font-bold tracking-tighter">KENT AI CONCIERGE</h2>
        </div>

        <div className="bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[500px]">
          <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-6 bg-grain">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-xl text-sm ${
                  msg.role === 'user' 
                  ? 'bg-purple-600 text-white rounded-tr-none' 
                  : 'bg-zinc-900 border border-white/10 text-white/80 rounded-tl-none font-mono'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-zinc-900 p-4 rounded-xl rounded-tl-none flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-zinc-950 flex gap-4">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my philosophy..."
              className="flex-1 bg-transparent border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors uppercase tracking-widest"
            />
            <button 
              type="submit" 
              disabled={isTyping}
              className="bg-white text-black px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-colors disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
