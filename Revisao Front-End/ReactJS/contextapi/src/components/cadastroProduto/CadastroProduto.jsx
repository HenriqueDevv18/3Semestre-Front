import { useContext, useState } from "react";
import { ProdutoContext } from "../../context/ProdutoContext";


const CadastroProduto = () => {

    const {listaProduto, setListaProdutos} = useContext(ProdutoContext)

    const [novoProduto, setNovoProduto] = useState()

  return (
    <>
        <h2> Cadastro Produto</h2>

        <input type="text"
        value={novoProduto}
        onChange={(e) => {
            setNovoProduto(e.target.value);
        }}
         
         />
         <button onClick={() => {
             setListaProdutos([...listaProduto, novoProduto])
             setNovoProduto("")
             alert("Cadastrado com sucesso")
         }}
         >
        Cadastrar
        </button>
        <p>Produto que será cadastrado: {novoProduto}</p>
    </>
    )
}

export default CadastroProduto;