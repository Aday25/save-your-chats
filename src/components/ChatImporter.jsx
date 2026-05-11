import { useState } from "react";

export default function ChatImporter({ onChatLoaded }) {
  const [fileName, setFileName] = useState("");

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);

    const text = await file.text();

    // Por ahora solo devolvemos el texto crudo
    onChatLoaded(text);
  };

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>📦 Importar chat</h2>

      <input type="file" accept=".zip,.txt" onChange={handleFile} />

      {fileName && <p>Archivo: {fileName}</p>}
    </div>
  );
}