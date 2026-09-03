import { useState } from "react"

function App() {

  let [cliques, setCliques] = useState(0)
  let [nome, setNome] = useState("Aguardando...")


  function carregarNome(){
    setNome("Laura")
  }



  return (
    <div>
      <h1>Hello World!</h1>
      <p>Estou aprendendo React :) </p>
      <p> Meu nome é: {nome}</p>
      <button onClick={() => setNome ("Laura")}>Carregar nome </button>

      <hr />

      <p>Você clicou <strong>{cliques}</strong> vezes</p>
      <button onClick= {() => setCliques (cliques + 1 )}>Clique aqui</button>
      {/*
                      () => : Arrow Function -> Função do tipo seta (lambda)
                      Função anônima
      */}

    </div>
  )
}

export default App
