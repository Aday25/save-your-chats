import { useState } from "react";
import ChatImporter from "./components/ChatImporter";
import { parseWhatsApp } from "./utils/parseWhatsApp";

function App() {
  const [messages, setMessages] = useState([]);

  const handleFile = (text) => {
    const parsed = parseWhatsApp(text);
    setMessages(parsed);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>💬 SaveYourChats</h1>

      <ChatImporter onFileLoaded={handleFile} />

      <div style={{ padding: "20px" }}>
        <h3>Mensajes parseados</h3>

        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: "10px" }}>
            <strong>{m.sender}</strong> ({m.date} {m.time})<br />
            {m.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;