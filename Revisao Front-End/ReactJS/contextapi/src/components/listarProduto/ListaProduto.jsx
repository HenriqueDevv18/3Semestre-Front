import { useContext } from "react"
import { ProdutoContext } from "../../context/ProdutoContext"

export const listaProduto = () => {
 const {listaProduto} = useContext(ProdutoContext)

    return (
        <>
        <h2>Página de produtos</h2>
        {listaProduto.map((item) => {
            return <p>{item}</p>
        })}
        </>
    )
}

export default listaProduto