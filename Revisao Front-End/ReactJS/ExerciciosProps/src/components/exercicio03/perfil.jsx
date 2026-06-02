import "./perfil.css"

export const Perfil = ({nome, idade, profissao}) =>{
    return (
     <article className="Pefil">
        nome : {nome} <br />
        idade : {idade} <br />
        profissao : {profissao}


     </article>
    )
}


export default Perfil