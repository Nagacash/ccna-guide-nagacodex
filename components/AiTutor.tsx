import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';

const UserIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
    </svg>
);

const BotIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
         <path d="M11.25 4.533A9.708 9.708 0 0 0 6 3a9.708 9.708 0 0 0-5.25 1.533v1.65a.75.75 0 0 0 1.5 0v-1.154a8.208 8.208 0 0 1 3.75-1.022.75.75 0 0 0 0-1.5zM12.75 4.533A9.708 9.708 0 0 1 18 3a9.708 9.708 0 0 1 5.25 1.533v1.65a.75.75 0 0 1-1.5 0v-1.154a8.208 8.208 0 0 0-3.75-1.022.75.75 0 0 1 0-1.5z" />
        <path fillRule="evenodd" d="M12 21a8.25 8.25 0 0 0 8.25-8.25V8.347a.75.75 0 0 0-.272-.582l-3.322-2.492a.75.75 0 0 0-.956.126l-.497.663a.75.75 0 0 1-1.218-.044l-.478-.796a.75.75 0 0 0-1.218-.044l-.498.663a.75.75 0 0 1-1.217-.044l-.478-.796a.75.75 0 0 0-1.218-.044l-.497.663a.75.75 0 0 1-1.218-.044l-.478-.796a.75.75 0 0 0-1.217-.044l-.498.663a.75.75 0 0 1-1.218.044l-2.022-2.696a.75.75 0 0 0-.956-.126L4.022 7.765A.75.75 0 0 0 3.75 8.347v4.403A8.25 8.25 0 0 0 12 21zm-6-8.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75zm3.75-1.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3z" clipRule="evenodd" />
    </svg>
);


const SendIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
    </svg>
);

interface Message {
    role: 'user' | 'model';
    text: string;
}

const AiTutor = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const chatRef = useRef<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null); // Ref for the scrollable container

    useEffect(() => {
        if (!process.env.API_KEY) {
            const errorMessage = "ERROR: API_KEY is not set. Please configure the API_KEY environment variable to use the AI Tutor.";
            setError(errorMessage);
            setMessages([{ role: 'model', text: errorMessage }]);
            return;
        }
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            chatRef.current = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: "You are a friendly and knowledgeable CCNA study assistant named 'PrepBot'. Your goal is to help users understand complex networking topics clearly and concisely. Format your answers using markdown-style formatting. Use **bold** for key terms, `code blocks` for commands or addresses, and bulleted lists (`* item`) for points. Be encouraging and supportive.",
                },
            });
            setMessages([{ role: 'model', text: "Hello! I'm PrepBot, your AI Tutor. Ask me anything about CCNA topics, from 'What is OSPF?' to 'Show me how to configure a static route.' Let's get you ready for your exam!" }]);
        } catch (e) {
            const errorMessage = "Failed to initialize AI Tutor. Please check your API key and refresh the page.";
            setError(errorMessage);
            setMessages([{ role: 'model', text: errorMessage }]);
        }
    }, []);

    useEffect(() => {
        if (messagesEndRef.current && chatContainerRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, [messages, loading]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || loading || !chatRef.current) return;

        const userMessage: Message = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        const currentInput = input;
        setInput('');
        setLoading(true);
        setError(null);
        
        try {
            const stream = await chatRef.current.sendMessageStream({ message: currentInput });
            setMessages(prev => [...prev, { role: 'model', text: '' }]);
            
            for await (const chunk of stream) {
                const chunkText = chunk.text;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].text += chunkText;
                    return newMessages;
                });
            }
        } catch (err) {
            console.error(err);
            const errorMessage = "Sorry, I encountered an error. Please check your API key and network connection, then try again.";
            setError(errorMessage);
            setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-dark-secondary/50 border border-dark-border rounded-lg flex flex-col max-h-[800px]">
            <div className="flex-grow p-4 sm:p-6 space-y-6 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-start gap-3 sm:gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                        {msg.role === 'model' && (
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-secondary flex items-center justify-center text-cyan-400 border border-dark-border">
                                <BotIcon />
                            </div>
                        )}
                        <div
                            className={`max-w-xl p-3 sm:p-4 rounded-lg prose prose-invert prose-p:my-1 prose-ul:my-1 max-w-none text-sm sm:text-base prose-p:text-dark-muted-foreground prose-li:text-dark-muted-foreground prose-strong:text-dark-foreground/90 prose-code:text-cyan-300 prose-code:bg-dark-background/50 prose-code:p-1 prose-code:rounded-sm prose-code:font-mono whitespace-pre-wrap ${
                                msg.role === 'user' ? 'bg-cyan-600/80 text-white' : 'bg-dark-background/60'
                            }`}
                        >
                            {msg.text}
                        </div>
                        {msg.role === 'user' && (
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-secondary flex items-center justify-center text-dark-foreground border border-dark-border">
                                <UserIcon />
                            </div>
                        )}
                    </div>
                ))}
                {loading && (
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-secondary flex items-center justify-center text-cyan-400 border border-dark-border">
                            <BotIcon />
                        </div>
                        <div className="max-w-xl p-4 rounded-lg bg-dark-background/60">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse [animation-delay:0.2s]"></div>
                                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse [animation-delay:0.4s]"></div>
                            </div>
                        </div>
                    </div>
                )}
                 <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-4 border-t border-dark-border flex items-center gap-2 sm:gap-4">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder={error ? "AI Tutor is unavailable" : "Ask a CCNA question..."}
                    disabled={loading || !!error}
                    className="flex-grow flex h-10 w-full rounded-md border border-dark-input bg-dark-secondary px-3 py-2 text-sm ring-offset-dark-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-dark-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    aria-label="Your message"
                />
                <button
                    type="submit"
                    disabled={loading || !input.trim() || !!error}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-dark-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-cyan-600 text-white hover:bg-cyan-600/90 h-10 w-10"
                    aria-label="Send message"
                >
                    <SendIcon />
                </button>
            </form>
        </div>
    );
};

export default AiTutor;
