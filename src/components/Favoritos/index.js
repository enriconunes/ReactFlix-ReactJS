import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

export default function Favoritos() {

    const [filme, setFilme] = useState([])

    useEffect(() => {
        const meusFavoritos = localStorage.getItem("@reactflix")
        setFilme(JSON.parse(meusFavoritos) || [])
    }, [])

    function remover(idFilme){
        
        // percorre por todo array fazendo o filtro
        // retorna apenas os items em que o .id seja !== idFilme
        // guarda o retorno em 'filtroFilmes'
        // atualiza a variavel 'filme' com a lista de favoritos
        // atualiza o index '@reactflix' no localStorage
        let filtroFilmes = filme.filter( (item) => {
            return(item.id !== idFilme)
        })

        setFilme(filtroFilmes)
        localStorage.setItem("@reactflix", JSON.stringify(filme))

        toast.success("Filme removido com sucesso!")
    }

    return (
        <div className="h-min h-screen bg-gray-200">
            <div className="w-screen text-center py-6">
                <h1 className="text-2xl">Meus favoritos</h1>
                {filme.length === 0 &&
                <div className="mt-5">
                    <p className="-mb-1">Sua lista de filmes favoritos está vazia! :(</p>
                    <Link to="/" className="text-sm text-blue-600 hover:underline">Clique aqui para ver o nosso catálogo</Link>
                </div>}
            </div>

            <div className="flex justify-around md:justify-center md:gap-x-4 flex-wrap pt-4 container md:mx-auto">
                {filme.map((index) => {
                    return (
                        <div key={index.id} className="bg-gray-100 rounded-md shadow-md p-2 w-5/12 md:w-3/12 mb-4 truncate">
                            <span className="text-xs md:text-sm font-medium">{index.title}</span>
                            <img className="mt-2 rounded-md" src={`https://image.tmdb.org/t/p/original${index.backdrop_path}`} alt="" />
                            <div className="flex justify-between gap-x-1 items-center pt-2 text-xs md:text-sm">
                                <Link className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300 w-full text-center" to={`/filme/${index.id}`}>Detalhes</Link>
                                <Link className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300 w-full text-center" onClick={() => { remover(index.id)}}>Remover</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}