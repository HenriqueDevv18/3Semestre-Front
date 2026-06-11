import Logo from "../../assets/img/logo.svg";
import "./Login.css";
import Botao from "../../components/botao/Botao.jsx";
import { useContext } from "react";
import { useState } from "react";
import UsuarioContext from "../../context/UsuarioContext";
import SenhaContext from "../../context/SenhaContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { email, setEmail } = useContext(UsuarioContext);
    const { senha, setSenha } = useContext(SenhaContext);
    const [novoEmail, setNovoEmail] = useState("");
    const [novoSenha, setNovoSenha] = useState("");
    const navigate = useNavigate();


    const login = async (e) => {

        localStorage.setItem("email", JSON.stringify(novoEmail));
        localStorage.setItem("senha", JSON.stringify(novoSenha));


        setEmail(novoEmail)
        setSenha(novoSenha)

        setNovoEmail("");
        setNovoSenha("");

        navigate("/filmes")
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
                            <input value={novoEmail} onChange={(e) => setNovoEmail(e.target.value)} type="email" name="email" placeholder="Digite seu email" />
                        </div>
                        <div className="campo_input">
                            <label htmlFor="senha">Senha:</label>
                            <input value={novoSenha} onChange={(e) => setNovoSenha(e.target.value)} type="password" name="senha" placeholder="Digite sua senha" />
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
