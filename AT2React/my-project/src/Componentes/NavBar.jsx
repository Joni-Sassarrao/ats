import { NavLink } from "react-router-dom"

export default function NavBar(){
    return(
        <>
        <nav>
            <ul className="flex gap-3 text-3xl">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="filmes">Filmes</NavLink></li>
                <li><NavLink to="Contato">Contato</NavLink></li>
            </ul>
        </nav>
        </>
    )
}