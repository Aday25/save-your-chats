import { useState } from "react";
import ChatImporter from "./components/ChatImporter";

function App() {
  const [chatText, setChatText] = useState("");

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>💬 SaveYourChats</h1>

      <ChatImporter onFileLoaded={setChatText} />

      <div style={{ padding: "20px" }}>
        <h3>Preview</h3>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          {chatText}
        </pre>
      </div>
    </div>
  );
}

export default App;