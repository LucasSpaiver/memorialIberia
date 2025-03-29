import React, { useRef, useState } from "react";
import QrScanner from "qr-scanner";

const Home = () => {
  const videoRef = useRef(null);
  const [scanner, setScanner] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const funcionario = funcionarios.find((f) => f.id === String(id));

  useEffect(() => {
      if (!funcionario) {
        setTimeout(() => {
          navigate("/funcionario/");
        }, 3000); // Redireciona para a página inicial após 3 segundos
      }
    }, [funcionario, navigate]);

    if (!funcionario) {
      return <h2>Funcionário não encontrado. Redirecionando...</h2>;
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
