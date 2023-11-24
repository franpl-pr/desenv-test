
function ProductList({ produtos }) {


    <h3>Lista de produtos</h3>

    const listProd = produtos.map(produto =>
        <li key={produto.id}>
            {produto.preco}
            {produto.nome}

        </li>

    )







    return (

        <ul>{listProd}</ul>

    )

}

export default ProductList