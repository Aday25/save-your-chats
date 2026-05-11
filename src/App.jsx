import { useState } from "react";
import ChatImporter from "./components/ChatImporter";
import { parseWhatsApp } from "./utils/parseWhatsApp";
import ChatView from "./components/ChatView";

function App() {
  const [messages, setMessages] = useState([]);

  const handleFile = (text) => {
    const parsed = parseWhatsApp(text);
    setMessages(parsed);
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.title}>💬 SaveYourChats</h1>

      <ChatImporter onFileLoaded={handleFile} />

      {messages.length > 0 && (
        <div style={styles.chatSection}>
          <h3 style={styles.subtitle}>Conversación</h3>
          <ChatView messages={messages} />
        </div>
      )}
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "sans-serif",
    background: "#fafafa",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    padding: "20px 0",
    margin: 0,
  },
  chatSection: {
    padding: "10px",
  },
  subtitle: {
    textAlign: "center",
    marginTop: "20px",
    opacity: 0.7,
  },
};

export default App;