import ProductList from "@/app/components/ProductList";
const produtos = [
  {
    id: 1,
    nome: "Camiseta",
    preco: 10.99,
  },
  {
    id: 2,
    nome: "Calça",
    preco: 19.99,
  },
  {
    id: 3,
    nome: "Saia",
    preco: 19.99,
  },
];
//Componente Products list em "src/components"



export default function Questao4() {




  return (
    <>
      <h1>Questão 4</h1>
      <p>
        Crie um componente chamado `ProductList` que recebe uma matriz de
        objetos de produto e renderiza uma lista de produtos. Cada produto deve
        exibir seu nome e preço.
        <ProductList produtos={produtos} />
      </p>

    </>
  );
}
