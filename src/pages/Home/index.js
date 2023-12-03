import { useEffect, useState } from "react"
import api from "../../services/api";
import { Link } from "react-router-dom";

//URL da API: /movie/now_playing?api_key=0987fcb4508da50d8b3947d755acf9ad&language=pt-BR

export default function Home(){
    const [filmes, setfilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    // assync e await garantem que a aplicacao so continue apos a execução da funcao
    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("/movie/now_playing", {
                params: {
                    api_key: "0987fcb4508da50d8b3947d755acf9ad",
                    language: "pt-BR",
                    page: 1
                }
            })

            console.log("Resposta API:\n",response.data)

            //filmes começa como um array vazio e depois recebe a resposta da API com um limite de 10 itens
            setfilmes(response.data.results)
        }
        
        loadFilmes();
        setLoading(false);
    }, [])
    // array vazio indica que a funcao so vai ser executada uma vez (ao carregar o componente) e nao dependerá da mudança de estado de alguma variavel

    if(loading){
        return (
            <div className="h-screen mx-auto text-center text-4xl font-black mt-20">
                Carregando filmes...
            </div>
        )
    }
    
    return(
        <div className="bg-gray-200 w-full">
            <div className="mx-auto max-w-4xl p-4">
                <h1 className="pt-4 pb-2 text-2xl border-b border-b-gray-300 mb-8 container">Últimos Lançamentos</h1>

                <div className="">
                    {filmes.map((index) => {
                        return (
                            <div className="bg-gray-100 p-4 shadow-lg rounded-md mb-10 md:grid md:grid-rows-4 md:grid-cols-2" key={index.id}>
                                {/* Título */}
                                <div className="md:ml-10 mb-2 md:mb-8 text-center md:text-left p-2 md:pl-0 text-gray-800">
                                    <h1 className="font-bold text-lg truncate hover:whitespace-normal hover:text-blue-900 hover:cursor-pointer"> <Link to={`/filme/${index.id}`}> {index.title} </Link></h1>
                                    <span className="text-xs text-blue-950 border-b border-b-gray-300 md:border-none -pt-20">Lançamento: {index.release_date}</span>
                                </div>
                                
                                {/* Imagem (em coluna 2 em telas médias) */}
                                <div className="md:row-span-4 md:flex md:justify-center md:pl-16 my-4">
                                    <img className="md:max-h-96 rounded-md" src={`https://image.tmdb.org/t/p/original${index.poster_path}`} alt={index.title} />
                                </div>

                                {/* Descrição e Link (em coluna 1 em telas médias) */}
                                <div className="md:-mt-10 md:row-span-2 md:ml-10 mb-4">
                                    <p className="text-justify">{index.overview}</p>
                                </div>

                                <div className="md:flex md:items-end md:ml-10">
                                    <Link className="font-medium bg-gray-200 p-2 rounded-md hover:underline md:mb-4" to={`/filme/${index.id}`}>Visualizar</Link>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )

}

//useEffect: Funcao chamada ao carregar componente
//useState: Alterar valor de uma variavel