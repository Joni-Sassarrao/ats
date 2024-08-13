import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { data } from "../../artigos.json"

export default function Home(){

    console.log(data)
    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[])

    return(
        <>
        <h1>Home</h1>
        </>
    )
}