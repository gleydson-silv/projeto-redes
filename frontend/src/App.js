import React, { useEffect, useState } from "react";

function App() {
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/mensagem/")
      .then((res) => res.json())
      .then((data) => setMensagem(data.mensagem))
      .catch((err) => setMensagem("Erro ao acessar a API"));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Mensagem do Backend:</h1>
      <p>{mensagem}</p>
    </div>
  );
}

export default App;
