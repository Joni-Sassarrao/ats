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
        <h1 className="bg-white">SEXO GOSTOSO</h1>
        </> 
    )
}