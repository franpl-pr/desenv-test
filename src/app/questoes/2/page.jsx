import { useState, useEffect } from "react";



//contador inicializado em zero
const Contador = () => {
  const [numero, setNumero] = useState(0)

  //função será chamada quando o botão for clicado

  const incrementar = () => {
    setNumero(numero + 1)
  }


  const decrementar = () => {
    setNumero(numero - 1)


    //quando for renderizado
    useEffect(() => {
      setNumero(10)
    })


  }

  return (
    <>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>


    </>
  )


}











export default function Questao2() {





  return (
    <>
      <h1>Questão 2</h1>
      <p>
        Crie um contador inicializado em 0.
        A tela deve exibir dois botões: um
        para incrementar o contador e outro para decrementar o contador.
        Ao carregar a tela, o contador deve ser atualizado para 10.
        Implemente a lógica para atualizar o contador quando a tela for carregada e a lógica
        para atualizar o contador quando os botões forem clicados.
      </p>
    </>
  );
}
