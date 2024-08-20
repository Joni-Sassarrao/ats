import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DetalhesFilme() {
    console.log(useParams)
    const {id} = useParams()
    const [filme, setFilme] = useState({})

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilme(response))
        .catch(error => console.log(error))
    },[])
    return (
        <>
            <h1 className="flex justify-center text-2xl text-white font-MontaguSlab mt-5 mb-24">Detalhes do Filme {filme.title}</h1>
            <div className="flex flex-row m-4 border rounded-lg">
                <img className="m-4 w-80 rounded-lg border" src={`https://image.tmdb.org/t/p/w1280/${filme.poster_path}`}/>
                <div className="flex flex-col m-3 font-K2D">
                    <p className="text-white text-3xl mb-5">{filme.title}</p>
                    <p className="text-white text-lg mb-5">{filme.overview}</p>
                    <p className="text-white mb-4">Nota do Metacritic {filme.vote_average}</p>
                    <p className="text-white">O filme será lançado nessa data: {filme.release_date}</p>
                </div>
            </div>
            <div className="bg-black h-[148px]"></div>
        </> 
    )
}