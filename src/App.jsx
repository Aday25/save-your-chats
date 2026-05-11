import { useState } from "react";
import ChatImporter from "./components/ChatImporter";
import { parseWhatsApp } from "./utils/parseWhatsApp";
import ChatView from "./components/ChatView";
import { mergeChats } from "./utils/mergeChats";

function getMainSender(messages) {
  const count = {};

  messages.forEach((m) => {
    if (m.sender) {
      count[m.sender] = (count[m.sender] || 0) + 1;
    }
  });

  return Object.entries(count)
    .sort((a, b) => b[1] - a[1])[0]?.[0];
}

function App() {
  const [messages, setMessages] = useState([]);
  const [me, setMe] = useState("");
  const [dark, setDark] = useState(false);

  const handleFile = (text) => {
    const parsed = parseWhatsApp(text);

    // 🧠 nueva capa de limpieza real del chat
    const merged = mergeChats(parsed);

    const mainSender = getMainSender(merged);

    setMe(mainSender);
    setMessages(merged);
  };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        background: dark ? "#111" : "#fff",
        color: dark ? "#fff" : "#000",
        minHeight: "100vh",
        transition: "all 0.2s ease",
      }}
    >
      <header style={{ textAlign: "center", padding: "20px" }}>
        <h1>💬 SaveYourChats</h1>

        <button
          onClick={() => setDark(!dark)}
          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            cursor: "pointer",
            background: dark ? "#333" : "#eee",
            color: dark ? "#fff" : "#000",
          }}
        >
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <ChatImporter onFileLoaded={handleFile} />

      {messages.length > 0 && (
        <ChatView messages={messages} me={me} dark={dark} />
      )}
    </div>
  );
}

export default App;