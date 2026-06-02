import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import "./CadastroGenero"
import Cadastro from "../../components/cadastro/Cadastro"
import { useState} from "react"
import api from "../../Services/services"
import Lista from "../../components/lista/Lista"
import { useEffect } from "react"
import Swal from "sweetalert2"
import { Alerta } from "../../components/alerta/Alerta"

const CadastroGenero = () => {
    //states e variáveris
    const [valor, setValor] = useState("");
    const [idEditar, setIdEditar] = useState(0);
    const [editar, setEditar] = useState(false);
    const [listaGeneros, setListaGeneros] = useState([])
    //ciclo de vida e funções
    const cadastrarGenero = async (e) => {
        e.preventDefault()
        //validação dos dados preenchido
        if(valor.trim().length == 0)
        {

            Alerta({ 
            title: "Cadastro de Gênero",
            text: "Gênero deve ser preenchido antes de cadastrar",
            icon: "warning",
            confirmButtonText: "Ok"
        });

           
         return false
        }

       const objCadastro = {
            nome : valor,
        };

        try {
            const retornoAPI = await api.post("/Genero", objCadastro)

            if(retornoAPI.status == 201){
                Swal.fire({
                    title: "Cadastro de Gênero",
                    text: `${objCadastro.nome} cadastrado`,
                    icon: "sucess",
                    confirmButtonText: "Ok"
                }
                )
                limparFormulario()
                getGeneros();
            }else{
                Swal.fire({
                    title: "Cadastro de Gênero",
                    text: "Erro na chamada da API",
                    icon: "error",
                    confirmButtonText: "Ok"
                   
                })
            }
        } catch (error) {
            Swal.fire({
                    title: "Cadastro de Gênero",
                    text: "Erro na chamada da API",
                    icon: "error",
                    confirmButtonText: "Ok"
                })
        }

        return false
    }

    const limparFormulario = () => {
        setValor("")
    }


    const preEditar = (item) => {
        setValor(item.nome)
        setEditar(true)
        setIdEditar(item.idGenero)
        console.log(item);
    }

    const cancelarPreEditar = (e) => {
        e.preventDefault();
        setEditar(false)
        setValor("")
        setIdEditar(0)
    }

    


    const editarGenero = async (e) => {
        e.preventDefault()
        const objEditar ={
            nome : valor
        }

        try {
            const retornoAPI = await api.put(`/Genero/${idEditar}`, objEditar)
            if (retornoAPI.status == 204) {
                 Swal.fire({
                    title: "Editor de cadastro",
                    text: "Gênero editado com sucesso!",
                    icon: "sucess",
                    confirmButtonText: "Ok"
                })
                // alert("Gênero editado com sucesso!")
                limparFormulario()
                getGeneros()
            } else {
                Swal.fire({
                    title: "Editor de cadastro",
                    text: "Algum problema aconteceu ao editar!",
                    icon: "error",
                    confirmButtonText: "Ok"
                })
                // alert("Algum problema aconteceu ao editar")
            }
        } catch (error) {
            alert("Erro ao chamar a api " + error)
        }
    }


    

    const excluirGenero = async (item) => {


     const result = await Alerta({
        title: "Cadastro de Gênero",
        text: `Deseja realmente apagar o gênero (${item.nome})`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar Exclusão",
        cancelButtonText: "Cancelar",
     })
     
        if (!result.isConfirmed) {
            return false
        }

        try {
            const retornoAPI = await api.delete(`/Genero/${item.idGenero}`);
            if(retornoAPI.status == 204 || retornoAPI.status == 200) {
                console.log(retornoAPI);
                alert("Apagado com sucesso");
                getGeneros();
            }
        } catch (erro) {}
         }

         useEffect(() => {
            getGeneros();
         }, []);

         const getGeneros = async () => {
     
        try {
            const retornoAPI = await api.get("/Genero")
            const dados = retornoAPI.data
            setListaGeneros(dados)
        } catch (error) {
            alert("Erro ao retornar os dados " + error)
        }
    };

    //o jsx
    return (
        <>
        <Header/>
        <main>
            <Cadastro
            tituloCadastro="Cadastro de Gêneros"
            visibilidade="none"
            placeholder="gênero"

            //state
            valor={valor}

            //função que muda o state
            setValor={setValor}
            funcCadastro={editar ? editarGenero : cadastrarGenero}
            editar={editar}
            cancelarEdicao={cancelarPreEditar}
            btnEditar={editar}
            />

            <Lista
                    tituloLista="Lista de Gêneros"
                    visibilidade="none"

                    //Chama o método para validar:
                    lista={listaGeneros}
                    //Identifica o tipo de lista:
                    tipoLista="genero"
                    funcExcluir={excluirGenero}
                    funcEditar={preEditar}


                    // funcExcluir = {excluirGenero}
                    // funcEditar = {preEditar}
                />
        </main>
        <Footer/>
        </>
    )
}
 

export default CadastroGenero;