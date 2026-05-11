import { useState } from "react";
import ChatImporter from "./components/ChatImporter";

function App() {
  const [chatText, setChatText] = useState("");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>💬 SaveYourChats</h1>

      <ChatImporter onFileLoaded={setChatText} />

      <div style={{ marginTop: "2rem" }}>
        <h3>Contenido crudo</h3>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          {chatText}
        </pre>
      </div>
    </div>
  );
}

export default App;