import "./ItemLista.css"
import { AboutBooks } from "../types/types";

    

const ItemLista = ({id, titulo, autor, ano, preco,excluirClick, foto}: AboutBooks) => {
    
    return (
    <tr>
        <td>{id}</td>
        <td>{titulo}</td>
        <td>{autor}</td>
        <td>{ano}</td>
        <td className="text-end">
            {Number(preco).toLocaleString("pt-br", {minimumFractionDigits: 2})}
        </td>
        <td className="text-center">
            <img src={foto} alt="Capa do Livro" width="75" />
        </td>
        <td className="text-center">
            <i className="exclui text-danger fw-bold" onClick={excluirClick} title="Excluir">&#10008;</i>
            <i className="altera text-sucess fw-bold ms-2" title="Alterar">&#36;</i>
        </td>
    </tr>
    )
};
 export default ItemLista;