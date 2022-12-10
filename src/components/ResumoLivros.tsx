import { useState, useEffect } from "react";
import { inAxios } from "../config_axios";
import { Chart } from "react-google-charts";

const ResumoLivros = () => {
    const [resumo, setResumo] = useState([]);
    const [grafico, setGrafico] = useState([]);

    const obterDados = async () => {
        try {
            const dadosResumo = await inAxios.get("livros/dados/resumo");
            setResumo(dadosResumo.data);

            const dadosGrafico = await inAxios.get("livros/dados/grafico");
            // cria um array e adiciona a primeira linha
            const arrayGrafico: any = [["Ano", "R$ Total"]];
            // percorre cada linha do JSON e adicion aao array
            dadosGrafico.data.map((dado: any) => 
            arrayGrafico.push([dado.ano.toString(), dado.total])
            );
            setGrafico(arrayGrafico);
        }  catch (error) {
            alert(`Erro...Não foi possível obter os dados ${error}`)
        }
    }
    // define o método que será executado asssim que o componente for renderizado
    useEffect(() => {
        obterDados();
    }, [])
  return (
    <div className="container">
        <h4 className="mt-3">Resumo</h4>
        <span className="btn btn-outline-priamry btn-lg">
            <p className="badge bg-danger">{resumo.num}</p>
            <p>N° de Livros Cadastrados</p>
        </span>
        <span className="btn btn-outline-primary btn-lg mx-2">
            <p className="badge bg-danger">
                {Number(resumo.soma).toLocaleString("pt-br", {minimumFractionDigits: 2})}
            </p>
            <p>Total Investido em Livros</p>
        </span>
        <span className="btn btn-outline-primary btn-lg me-2">
            <p className="badge bg-danger">
                {Number(resumo.maior).toLocaleString("pt-br", {minimumFractionDigits: 2})}
            </p>
            <p>Maior preço cadastrado</p>
        </span>
        <span className="btn btn-outline-primary btn-lg">
            <p className="badge bg-danger">
                {Number(resumo.media).toLocaleString("pt-br", {minimumFractionDigits: 2})}
            </p>
            <p>Preço médio dos livros</p>
        </span>

        <div className="d-flex justify content-center">
            <Chart 
            width={1000}
            height={420}
            chartType={"ColumnChart"}
            loader={<div>Carregando gráfico...</div>}
            data={grafico}
            options={{
                title: "Total de Investimentos em Livros - por Ano de Publicação",
                chartArea: {width: "80%"},
                hAxis: {title: "Ano de publicação"},
                vAxis: {title: "Preço acumulado R$"},
                legend: {position: "none"},
            }}
            />
        </div>
    </div>
  )
};
export default ResumoLivros;
