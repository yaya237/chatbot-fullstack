import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '💬 Bonjour 👋 Je suis votre assistant virtuel. Comment puis-je vous aider ?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Scroll automatique vers le bas
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (msg) => {
    if (!msg.trim()) return;

    setMessages(prev => [...prev, { sender: 'user', text: msg }]);
    setInput('');

    try {
      const res = await fetch('http://localhost:8080/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { sender: 'bot', text: data.reply, suggestions: data.suggestions }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { sender: 'bot', text: "⚠️ Erreur de connexion au serveur." }]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    sendMessage(suggestion);
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((m, idx) => (
          <div key={idx} className={`message ${m.sender}`}>
            {m.sender === 'bot' && <span className="avatar">🤖</span>}
            {m.sender === 'user' && <span className="avatar">👤</span>}
            <span className="text">{m.text}</span>
            {m.sender === 'bot' && m.suggestions && (
              <div className="suggestions">
                {m.suggestions.map((s, i) => (
                  <button key={i} onClick={() => handleSuggestionClick(s)}>{s}</button>
                ))}
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
          placeholder="Tapez un message..."
        />
        <button onClick={() => sendMessage(input)}>Envoyer</button>
      </div>
    </div>
  );
}

export default App;
