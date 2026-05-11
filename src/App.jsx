import { useState } from "react";
import ChatImporter from "./components/ChatImporter";
import { parseWhatsApp } from "./utils/parseWhatsApp";
import ChatView from "./components/ChatView";

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
    const mainSender = getMainSender(parsed);

    setMe(mainSender);
    setMessages(parsed);
  };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        background: dark ? "#111" : "#fff",
        color: dark ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      <header style={{ textAlign: "center", padding: "20px" }}>
        <h1>💬 SaveYourChats</h1>

        <button onClick={() => setDark(!dark)}>
          {dark ? "☀️ Light" : "🌙 Dark"}
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