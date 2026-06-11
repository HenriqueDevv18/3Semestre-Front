import { useState } from 'react';
import UsuarioContext from './UsuarioContext';
import { useEffect } from 'react';

const UsuarioProvider = ({ children }) => {
    const [email, setEmail] = useState(JSON.parse(localStorage.getItem("email")) || null);
  

      useEffect(() => {
        //ao montar o componente, verifica se existe um usuário logado 
        const usuarioLogado = JSON.parse(localStorage.getItem("email"))   
        setEmail(usuarioLogado) //atualiza o state global com os dados do usuário 
    }, [])


    return (
        <UsuarioContext.Provider
            value={
                {
                    email,
                    setEmail,
                }}>
                    
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioProvider;