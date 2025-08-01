import { useState } from "react";
import axios from "axios";

// Định nghĩa kiểu message
interface Message {
  role: "user" | "bot";
  content: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await axios.post(
        "https://chat-bot-server-q44g.onrender.com/api/chat",
        {
          message: input,
        }
      );

      const botMessage: Message = { role: "bot", content: res.data.reply };
      setMessages((prev) => [...prev, botMessage]);
      setInput("");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Chatbot</h2>
      <div
        style={{
          maxHeight: 400,
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: 10,
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              margin: "5px 0",
              color: msg.role === "bot" ? "blue" : "black",
            }}
          >
            <strong>{msg.role === "bot" ? "AI" : "You"}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        style={{ width: "80%", marginTop: 10 }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
