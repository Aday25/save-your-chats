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

  const handleFile = (text) => {
    const parsed = parseWhatsApp(text);

    const mainSender = getMainSender(parsed);

    setMe(mainSender);
    setMessages(parsed);
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>💬 SaveYourChats</h1>

      <ChatImporter onFileLoaded={handleFile} />

      {messages.length > 0 && (
        <ChatView messages={messages} me={me} />
      )}
    </div>
  );
}

export default App;