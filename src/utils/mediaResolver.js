export function resolveMedia(messages, mediaFiles) {
  const mediaMap = new Map();

  // 🧠 indexamos todos los archivos del zip
  for (const file of mediaFiles) {
    const name = file.name.toLowerCase();
    mediaMap.set(name, file.data);
  }

  return messages.map((msg) => {
    if (!msg.text) return msg;

    // 🔍 buscar nombres de archivos dentro del texto
    const match = msg.text.match(
      /([\w\-]+\.(jpg|jpeg|png|gif|webp|mp4|3gp|mp3|opus|ogg|m4a|aac|wav|pdf))/i
    );

    if (!match) return msg;

    const filename = match[1].toLowerCase();

    return {
      ...msg,
      media: mediaMap.get(filename) || null,
      mediaName: filename,
      hasMissingMedia: !mediaMap.get(filename),
    };
  });
}