import Logo from "../../assets/img/logo.svg";
import "./Login.css";
import Botao from "../../components/botao/Botao.jsx";
import { useContext, useEffect } from "react";
import { useState } from "react";
import UsuarioContext from "../../context/UsuarioContext";
import SenhaContext from "../../context/SenhaContext";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { Alerta } from "../../components/alerta/Alerta.jsx"
import api from "../../Services/services.js"


const Login = () => {

    const { usuario, setUsuario } = useContext(UsuarioContext)
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const login = async () => {

        if (email.trim().length == 0 || senha.trim().length == 0) {
            Alerta({
                title: "Login",
                text: "Preencher todos os campos",
                icon: "warning",
                confirmButtonText: "OK"
            });
            return false;
        }

        const dadosLogin = {
            email: email,
            senha: senha,
        };

        // console.log(email);
        // console.log(senha);
        
        try {
            const retornoAPI = await api.post("/Login", dadosLogin)
            const token = await retornoAPI.data.token
            
            const usuarioDecoded = jwtDecode(token)
            setUsuario(usuarioDecoded)
            localStorage.setItem("usuario", JSON.stringify(usuarioDecoded))
            setEmail("");
            setSenha("");
            navigate("/filmes")

        } catch (error) {
            console.log(error);
            
            Alerta({
                title: "Login",
                text: "Usuario nao encontrado",
                icon: "warning",
                confirmButtonText: "OK"
                
            })
         }
        


            const verificaLogin = () => {
                const logado = JSON.parse(localStorage.getItem("usuario"))
           
            if(logado != undefined || logado != null) {
                setUsuario(logado)
                navigate("/generos")
            }
        }
        useEffect(() => {
            verificaLogin()
        }, [])

    }


    return (
        <main className="main_login">
            <div className="banner"></div>
            <section className="section_login">
                <img src={Logo} alt="Logo do Filmoteca" />
                <form action="" className="form_login">
                    <h1>Login</h1>
                    <div className="campos_login">
                        <div className="campo_input">
                            <label htmlFor="email">Email:</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Digite seu email" />
                        </div>
                        <div className="campo_input">
                            <label htmlFor="senha">Senha:</label>
                            <input value={senha} onChange={(e) => setSenha(e.target.value)} type="password" name="senha" placeholder="Digite sua senha" />
                        </div>
                    </div>
                    <Botao nomeDoBotao="Entrar"
                        onClick={(e) => {
                            e.preventDefault();
                            login();
                        }

                        }

                    />
                </form>
            </section>
        </main>
    )
}

export default Login;
