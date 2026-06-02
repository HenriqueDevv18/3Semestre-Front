import { UsuarioContext } from "../../context/UsuarioContext"
import { useContext } from "react"
const Produto = () => {
 const {usuario} = useContext(UsuarioContext)
    return (
        <>
        <h2>Página de produtos</h2>
        <p>Bem vindo, ({usuario})</p>
        </>
    )
}

export default Produto