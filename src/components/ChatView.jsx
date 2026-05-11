export default function ChatView({ messages, me }) {
  return (
    <div style={styles.container}>
      {messages.map((m, i) => (
        <MessageBubble key={i} message={m} me={me} />
      ))}
    </div>
  );
}

function MessageBubble({ message, me }) {
  const isMine =
    message.sender?.trim().toLowerCase() === me?.trim().toLowerCase();

  return (
    <div
      style={{
        ...styles.bubble,
        alignSelf: isMine ? "flex-end" : "flex-start",
        background: isMine ? "#e9f5ff" : "#f3f3f3",
      }}
    >
      <div style={styles.sender}>{message.sender}</div>
      <div>{message.text}</div>
      <div style={styles.time}>
        {message.date} · {message.time}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
    maxWidth: "700px",
    margin: "0 auto",
  },

  bubble: {
    maxWidth: "70%",
    padding: "10px 14px",
    borderRadius: "12px",
    fontFamily: "sans-serif",
  },

  sender: {
    fontSize: "12px",
    opacity: 0.6,
    marginBottom: "4px",
  },

  time: {
    fontSize: "10px",
    opacity: 0.5,
    marginTop: "6px",
  },
};