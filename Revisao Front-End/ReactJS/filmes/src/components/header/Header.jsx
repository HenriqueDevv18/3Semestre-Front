import "./Header.css";
import Logo from "../../assets/img/logo.svg"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UsuarioContext from "../../context/UsuarioContext";
import SenhaContext from "../../context/SenhaContext";

const Header = () => {
    const {email, setEmail} = useContext(UsuarioContext)
    const {senha, setSenha} = useContext(SenhaContext)
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("senha")
        localStorage.removeItem("usuarioLogado")

        setEmail(null)
        navigate("/")
    }
    return (
        <header>
            <div className="layout_grid cabecalho">
                {/* Ao clicar no link, redireciona para a tela login */}
                <Link to="/">
                    <img src={Logo} alt="Logo do Filmoteca" />
                </Link>

                <nav className="nav_header">
                    <Link className="link_header" to="/Filmes">Filme</Link>
                    <Link className="link_header" to="/Generos">Gênero</Link>
                </nav>

                <button
                    onClick={logout}
                    className="botao_logout"
                >Sair
                    
                </button>
            </div>
        </header>
    )
}

export default Header;