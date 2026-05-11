export function parseWhatsApp(text) {
  const lines = text.split("\n");
  const messages = [];

  const regex =
    /^(\d{1,2}\/\d{1,2}\/\d{2,4}),\s(\d{1,2}:\d{2})\s-\s([^:]+):\s(.+)$/;

  for (let line of lines) {
    const match = line.match(regex);

    if (match) {
      const [, date, time, sender, message] = match;

      messages.push({
        date,
        time,
        sender,
        text: message,
      });
    } else {
      // 🔥 mensaje continuo (muy importante en WhatsApp)
      if (messages.length > 0) {
        messages[messages.length - 1].text += " " + line;
      }
    }
  }

  return messages;
}