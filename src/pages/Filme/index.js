import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"
import { toast } from "react-toastify";

export default function Filme() {

    const { id } = useParams();

    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)
    const [filmeEncontrado, setFilmeEncontrado] = useState(true)


    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "0987fcb4508da50d8b3947d755acf9ad",
                    language: "pt-BR"
                }
            }).then((response) => {
                console.log(response)
                setFilme(response.data)
            }).catch((e) => {
                setFilmeEncontrado(false)
                console.log("ERRO: ", e)
            })
        }

        loadFilme()
        setLoading(false)

        return () => {
            console.log("Componente desmontado.")
        }
    }, [id])

    if (loading) {
        return (
            <div className="h-screen mx-auto text-center text-4xl font-black mt-20">
                Carregando detalhes...
            </div>
        )
    }

    function favoritarFilme() {
        const minhaLista = localStorage.getItem("@reactflix")

        // se minhaLista for 'undefined' (nao ha nada no storage com a chave @reactflix),
        // entao filmesSalvos passa a ser uma lista vazia
        let filmesSalvos = JSON.parse(minhaLista) || []


        const hasFilme = filmesSalvos.some((filmesSalvos) => filmesSalvos.id === filme.id)

        if (hasFilme) {
            toast.warning("Este filme já está salvo!")
            return;
        }

        // adiciona o filme (json) a lista
        // atualiza a chave @reactflix com o filme adicionado
        filmesSalvos.push(filme)
        localStorage.setItem("@reactflix", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!")
    }

    if (filmeEncontrado) {
        return (
            <div>
                <div className="bg-gray-200 p-6">
                    <div className="text-center py-6">
                        <h1 className="text-2xl">Detalhes do filme</h1>
                    </div>
                    <div className="container mx-auto">

                        <div className="bg-gray-100 py-12 max-w-3xl mx-auto rounded-md shadow-lg p-4 md:flex md:justify-between">
                            <div className="text-gray-800 space-y-1 md:w-7/12">

                                {/* TITULO */}
                                <h1 className="text-xl font-black border-b border-b-gray-300 pb-2 mb-3">{filme.title}</h1>

                                {/* GENERO */}
                                <div className="flex space-x-1 text-sm flex-wrap">
                                    <span className="font-bold">Gênero:</span>
                                    {filme.genres && filme.genres.map((index) => {
                                        return (
                                            <p key={index.id}>{index.name}</p>
                                        )
                                    })}
                                </div>

                                {/* PRODUCAO */}
                                <div className="flex text-sm">
                                    <span
                                        className="font-bold mr-1">Produção:</span>
                                    {
                                        filme.production_companies && <p>{filme.production_companies[0].name}</p>
                                    }
                                </div>

                                {/* IDIOMA */}
                                <div className="flex text-sm">
                                    <span
                                        className="font-bold mr-1">Idioma:</span>
                                    {
                                        filme.spoken_languages && <p>{filme.spoken_languages[0].name}</p>
                                    }
                                </div>

                                {/* AVALIACAO */}
                                <div className="flex text-sm">
                                    <span
                                        className="font-bold mr-1">Avaliação:</span>
                                    <p>{filme.vote_average} / 10</p>

                                </div>

                                {/* DESCRICAO */}
                                <div className="flex text-sm text-justify md:mr-5">
                                    <p className=""><span className="font-bold">Descrição: </span>{filme.overview}</p>
                                </div>

                                {/* BOTAO */}
                                <div className="flex text-sm text-justify md:mr-5">
                                    <Link className="bg-gray-300 px-6 py-1 rounded-sm my-6 md:mb-0 hover:bg-gray-400" onClick={favoritarFilme}>Favoritar</Link>
                                </div>

                            </div>

                            {/* IMAGEM */}
                            <div className="h-fit md:w-4/12">
                                <div className="md:hidden">
                                    <img className="rounded-md w-full h-auto" src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt={filme.title} />
                                </div>
                                <div className="hidden md:block">
                                    <img className=" md:h-full rounded-md" src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title} />
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
                <div className="md:h-32 bg-gray-200">

                </div>
            </div>

        )
    }

    return (
        <div className="grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-gray-800 will-change-scroll">Erro 404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Filme não encontrado!</h1>
                <p className="mt-6 text-base leading-7 text-gray-600">Desculpe, não encontramos o filme que você procura.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="#"
                        className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                        to="/"
                    >
                        Voltar ao início
                    </Link>
                    <Link href="#" className="text-sm font-semibold text-gray-900">
                        Reportar Erro <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </div>
    )

}