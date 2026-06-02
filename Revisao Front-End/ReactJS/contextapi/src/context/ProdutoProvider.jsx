import { useState } from "react"
import {ProdutoContext} from "./ProdutoContext"

export const ProdutoProvider = ({children}) =>{
    const [listaProduto, setListaProdutos] = useState([
        "Xiaomi"
    ])

    return (
        <ProdutoContext.Provider
        value={{
            listaProduto,
            setListaProdutos
        }}
        >
            {children}
        </ProdutoContext.Provider>
    )
}