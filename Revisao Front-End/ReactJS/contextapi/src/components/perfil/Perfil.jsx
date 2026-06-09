import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"
import { useState } from "react"

const Perfil = () => {
    const {usuario, setUsuario} = useContext(UsuarioContext)
    const [novoUsuario, setNovoUsuario] = useState()

    const login = () => {
        localStorage.setItem("usuario", JSON.stringify(novoUsuario))
        setUsuario(novoUsuario)
        setNovoUsuario("")
    }

    return(

        <div>

        <h2>Página de Perfil ({usuario})</h2>
        <input 
        
        type="text"
        placeholder="digite o novo usuario" 
        value={novoUsuario}
        onChange={(e) => {
            setNovoUsuario(e.target.value)
         }}
        />

        <button 
        onClick={() => {
           login()
        }}
        > Entrar </button>
        <p>Novo Usuario: <strong>{novoUsuario}</strong></p>
        </div>
    )
}

export default Perfil