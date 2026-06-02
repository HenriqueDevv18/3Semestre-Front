import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"
import { useState } from "react"

const Perfil = () => {
    const {usuario, setUsuario} = useContext(UsuarioContext)
    const [novoUsuario, setNovoUsuario] = useState()


    return(

        <div>

        <h2>Página de Perfil ({usuario})</h2>
        <input 
        
        type="text"
        placeholder="digite o novo usuario" 
        onChange={(e) => {
            setNovoUsuario(e.target.value)
         }}
        />

        <button 
        onClick={() => {
            setUsuario(novoUsuario)
        }}
        >Trocar Usuario </button>
        <p>Novo Usuario: <strong>{novoUsuario}</strong></p>
        </div>
    )
}

export default Perfil