import React, { useRef, useState } from "react";
import QrScanner from "qr-scanner";

const Home = () => {
  const videoRef = useRef(null);
  const [scanner, setScanner] = useState(null);

  const startScanner = () => {
    const qrScanner = new QrScanner(videoRef.current, (result) => {
      // Depure o resultado do QR Code
      console.log("Resultado do QR Code: ", result.data); // Verifique o valor retornado aqui
      
      const qrValue = result.data;

      // Verifique se o link está no formato correto
      if (qrValue && qrValue.startsWith("https://memorial-iberia.vercel.app/funcionario/")) {
        window.open(qrValue, "_blank"); // Abre o link em uma nova aba
      } else {
        alert("QR Code inválido ou com formato inesperado.");
      }

      qrScanner.stop(); // Interrompe a leitura do QR Code
    });

    setScanner(qrScanner);
    qrScanner.start(); // Inicia o scanner de QR Code
  };

  return (
    <div style={styles.container}>
      <h1>Bem-vindo ao Memorial Ibéria</h1>
      <p>Clique no botão para ler o QRCode.</p>
      <button style={styles.button} onClick={startScanner}>
        Abrir Câmera para QR Code
      </button>
      <video ref={videoRef} style={styles.video} autoPlay playsInline></video>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "1024px",
    minHeight: "100%",
    backgroundColor: "#f4f4f4",
    padding: "10px",
    flexDirection: "column",
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
    maxHeight: "80vh",
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
    maxHeight: "500px",
    minHeight: "200px",
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

export default Home;
