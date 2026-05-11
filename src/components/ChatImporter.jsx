import { useState } from "react";

export default function ChatImporter({ onFileLoaded }) {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFile = async (file) => {
    if (!file) return;

    // validación básica
    const allowed = ["text/plain", "application/zip"];
    if (!allowed.includes(file.type) && !file.name.endsWith(".txt") && !file.name.endsWith(".zip")) {
      alert("Formato no válido. Usa .txt o .zip");
      return;
    }

    setFileName(file.name);

    const text = await file.text();
    onFileLoaded(text);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  return (
    <div
      style={{
        border: isDragging ? "2px solid #4f46e5" : "2px dashed #ccc",
        padding: "40px",
        borderRadius: "12px",
        textAlign: "center",
        transition: "0.2s",
        background: isDragging ? "#f5f3ff" : "white",
        maxWidth: "600px",
        margin: "40px auto",
        fontFamily: "sans-serif",
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={onDrop}
    >
      <h2>📦 Importar chats</h2>

      <p style={{ color: "#666" }}>
        Arrastra tu archivo aquí o haz click para seleccionarlo
      </p>

      <input
        type="file"
        style={{ marginTop: "20px" }}
        onChange={(e) => handleFile(e.target.files[0])}
      />

      {fileName && (
        <p style={{ marginTop: "10px", color: "#4f46e5" }}>
          ✔ {fileName}
        </p>
      )}
    </div>
  );
}