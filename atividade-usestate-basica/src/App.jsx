
import { useState } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);
  const [visivel, setVisivel] = useState(false);
  const [nome, setNome] = useState("");
  const [nomeFinal, setNomeFinal] = useState("");
  const [mostrarSaudacao, setMostrarSaudacao] = useState(true);

  function aumentar() {
    setContador((valorAnterior) => valorAnterior + 1);
  }

  function diminuir() {
    setContador((valorAnterior) => valorAnterior - 1);
  }

  return (
    <main className="container">
      <h1>Atividade de useState</h1>
      <p>Aprendendo React com estados.</p>

      <section className="card">
        <h2>Missão 1 - Contador</h2>

        <p>Valor atual: {contador}</p>

        <button onClick={aumentar}>Aumentar</button>
        <button onClick={diminuir}>Voltar um</button>
        <button onClick={() => setContador(0)}>Zerar</button>
      </section>

      <section className="card">
        <h2>Missão 2 - Aviso</h2>

        <button onClick={() => setVisivel(!visivel)}>
          Alternar aviso
        </button>

        {visivel && <p>O aviso está visível.</p>}
      </section>

      <section className="card">
        <h2>Missão 3 - Saudação</h2>

        <input
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Digite seu nome"
        />

        <p>Olá, {nome || "visitante"}!</p>
      </section>

      <section className="card">
        <h2>Desafio final - Boas-vindas</h2>

        <input
          value={nomeFinal}
          onChange={(evento) => setNomeFinal(evento.target.value)}
          placeholder="Digite seu nome"
        />

        <button
          onClick={() =>
            setMostrarSaudacao(!mostrarSaudacao)
          }
        >
          Mostrar / Esconder saudação
        </button>

        {mostrarSaudacao && (
          <p>Olá, {nomeFinal || "visitante"}!</p>
        )}
      </section>
    </main>
  );
}

export default App;
