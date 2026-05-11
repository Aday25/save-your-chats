export function mergeChats(chats) {
  const map = new Map();

  chats.forEach((msg) => {
    const key = `${msg.date}-${msg.time}-${msg.sender}-${msg.text}`;

    if (!map.has(key)) {
      map.set(key, msg);
    }
  });

  return Array.from(map.values()).sort((a, b) => a.ts - b.ts);
}