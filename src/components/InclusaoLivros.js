import { useForm } from "react-hook-form";
import { inAxios } from "../config_axios";
import { useState } from "react";

const InclusaoLivros = () => {
    //REGISTER serve para definir os nomes dos campos do form (e validações)
    // handleSubmit, para indicar o método a ser acionado ne evento onSubmit do form
    // reset, para atribuir um valor para os campos registrados (para limpar o form)
    const { register, handleSubmit, reset } = useForm();

    const [aviso, setAviso] = useState("");

    //método chamado ao enviar o form (onSubmit)
    const salvar = async (campos) => {
        try {
            const response = await inAxios.post("livros", campos);
            setAviso(`Ok! Livro cadastrado com código ${response.data.id}`);
        } catch (error) {
            setAviso(`Erro...Livro não cadastrado: ${error}`)
        }
        // setTimeout: executa o comando após o tempo indicado (em milissegundos)
        setTimeout (() => { 
            setAviso("");
        }, 5000);

        //limpa os campos de formulário para uma nova inclusão
        reset({titulo: "", autor: "", ano: "", preço: ""});
        //JSON.stringify() converte um objeto JavaScript para uma string JSON
        };
    return (
        
        <div className="container">
            <h4 className="fst-italic mt-3">Inclusão</h4>
            <form onSubmit={handleSubmit(salvar)}> </form>
            <form>
                <div className="form-grpup">
                    <label htmlFor="titulo">Título:</label>
                    <input type="text" className="form-control" id="titulo" required autoFocus
                     {...register("titulo")} ></input>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="autor">Autor:</label>
                    <input type="text" className="form-control" id="autor" required
                     {...register("autor")}></input>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="foto">URL da foto:</label>
                    <input type="url" className="form-control" id="foto" required
                     {...register("foto")}></input>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="ano">Ano de publicação:</label>
                            <input type="number" className="form-control" id="ano" required
                             {...register("ano")}></input>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="form-group">
                            <label htmlFor="preco">Preço R$:</label>
                        <input type="number" className="form-control" id="preco" step="0.01"
                         required {...register("preco")}></input>
                    </div>
                </div>
                </div>
                <input type="submit" className="btn btn-primary mt-3" value="Enviar"></input>
                <input type="reset" className="btn btn-danger mt-3 ms-3" value="Limpar"></input>
            </form>
                <div className={aviso.startsWith("Ok!") ? "alert alert-sucess" :
                aviso.startsWith("Erro") ? "alert alert-danger" : ""}> {aviso}
            </div> 
        </div>
    ); 
};
export default InclusaoLivros;
