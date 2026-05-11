import { useState } from "react";
import ChatImporter from "./components/ChatImporter";

function App() {
  const [chatText, setChatText] = useState("");

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>💬 SaveYourChats</h1>

      <ChatImporter onChatLoaded={setChatText} />

      <hr />

      <h2>📄 Contenido del chat</h2>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        {chatText}
      </pre>
    </div>
  );
}

export default App;