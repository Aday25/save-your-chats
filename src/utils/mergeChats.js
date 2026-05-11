export function mergeChats(chats) {
  const map = new Map();

  for (const msg of chats) {
    const cleanText = (msg.text || "")
      .trim()
      .replace(/\s+/g, " ");

    const key = `${msg.date}|${msg.time}|${msg.sender}|${cleanText}`;

    if (!map.has(key)) {
      map.set(key, {
        ...msg,
        text: cleanText,
      });
    }
  }

  return Array.from(map.values()).sort((a, b) => {
    return (a.ts || 0) - (b.ts || 0);
  });
}