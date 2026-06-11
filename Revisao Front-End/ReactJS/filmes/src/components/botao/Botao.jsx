import "./Botao.css"

const Botao = (props) => {
    return(

        <button className="botao" type={props.btnEditar ? "button" : "submit"}
        onClick = {(e)=>{
            e.preventDefault()
            if(props.onClick) {
                props.onClick(e);
            }
            props.funcBtn(e)
        }}

        >{props.nomeDoBotao}
        
        </button>

    )
}

export default Botao;