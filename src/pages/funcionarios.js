import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import QrScanner from "qr-scanner";
import funcionarios from "../data"; // Certifique-se de importar corretamente os dados dos funcionários

const Funcionario = () => {
  const { id } = useParams();
  const funcionario = funcionarios.find((f) => f.id === String(id));
  const videoRef = useRef(null);
  const [scanner, setScanner] = useState(null);

  if (!funcionario) {
    return <h2>Funcionário não encontrado.</h2>;
  }

  const startScanner = () => {
    if (videoRef.current) {
      const qrScanner = new QrScanner(videoRef.current, (result) => {
        window.location.href = result.data;
        qrScanner.stop();
      });
      setScanner(qrScanner);
      qrScanner.start();
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src={funcionario.foto} alt={funcionario.nome} style={styles.image} />
        <h2 style={styles.name}>{funcionario.nome}</h2>
        <p style={styles.bio}>{funcionario.bio}</p>
        <button style={styles.button} onClick={startScanner}>
          Abrir Câmera para QR Code
        </button>
        <video ref={videoRef} style={styles.video} autoPlay playsInline></video>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100%",
    backgroundColor: "#f4f4f4",
    padding: "10px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "1024px",
    width: "100%",
    textAlign: "center",
    maxHeight: "100%",
    overflowY: "auto",
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
  },
  name: {
    fontSize: "1.5rem",
    color: "#333",
  },
  bio: {
    fontSize: "1rem",
    color: "#555",
    textAlign: "justify",
    maxWidth: "90%",
    width: "100%",
    overflowWrap: "break-word",
    whiteSpace: "pre-line",
    maxHeight: "1024px",
    height: "100%",
    overflowY: "auto",
    padding: "10px",
    boxSizing: "border-box",
  },
  button: {
    marginTop: "15px",
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  video: {
    marginTop: "10px",
    width: "100%",
    maxWidth: "400px",
    borderRadius: "10px",
  },
};

export default Funcionario;
