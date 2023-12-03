import { Link } from "react-router-dom"

export default function Header() {

    return (
        <div className="bg-gray-800 w-full h-24 text-gray-50 flex justify-between items-center px-6 md:px-10">
            <div className="font-black text-xl">
                <Link to="/"><h1>React Flix</h1></Link>
            </div>
            <div>
                <ul className="flex space-x-3 text-xs md:text-base">
                    <li className="border-r pr-3"><Link to="/">Início</Link></li>
                    <li className="border-r pr-3"><Link to="/favoritos">Meus filmes</Link></li>
                    <li><Link to="#" className="hover:cursor-not-allowed">Perfil</Link></li>
                </ul>
            </div>
        </div>
    )

}