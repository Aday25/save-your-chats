import { useState } from "react";

export default function ChatImporter({ onFileLoaded }) {
  const [fileName, setFileName] = useState("");

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);

    const text = await file.text();
    onFileLoaded(text);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Importar chat</h2>

      <label style={styles.uploadBox}>
        <input
          type="file"
          accept=".txt,.zip"
          onChange={handleFile}
          style={{ display: "none" }}
        />
        <span>📦 Seleccionar archivo de WhatsApp</span>
      </label>

      {fileName && (
        <p style={styles.fileName}>
          Archivo: {fileName}
        </p>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    border: "1px solid #e5e5e5",
    borderRadius: "12px",
    maxWidth: "500px",
    margin: "20px auto",
    fontFamily: "sans-serif",
  },
  title: {
    fontSize: "18px",
    marginBottom: "12px",
  },
  uploadBox: {
    display: "block",
    padding: "16px",
    border: "1px dashed #ccc",
    borderRadius: "10px",
    cursor: "pointer",
    textAlign: "center",
  },
  fileName: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#555",
  },
};