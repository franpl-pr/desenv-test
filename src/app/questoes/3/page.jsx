const numerosInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Questao3() {

  function Soma(numerosInteiros) {
    const numeros = numerosInteiros
    const tam = numeros.length
    var soma = 0

    for (var i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 == 0) {
        soma = soma + numeros[i]
      }
    }
    return soma
  }


  return (
    <>
      <h1>Questão 3</h1>
      <p>
        Escreva uma função JavaScript que recebe uma matriz de números inteiros
        e retorna a soma de todos os números pares. Exiba a soma na tela.
      </p>
      <p>Soma: {Soma(numerosInteiros)}</p>
    </>


  );
}
