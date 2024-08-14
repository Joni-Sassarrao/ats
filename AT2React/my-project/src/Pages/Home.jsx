import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import data from '../../artigos.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

export default function Home(){

    const [filmes, setFilmes] = useState([])

    const settings = {
        infinite:true,
        speed: 250,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000
    };

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[]) 

    return(
        <>
        <h1>Home</h1>
        <div className='flex justify-center'>
            <Slider {...settings} className='flex flex-row w-[70%]'>
                {filmes.map(filme =>(
                    <div key={filme.id}>
                        <img src={`https://image.tmdb.org/t/p/w200/${filme.poster_path}`} alt={filme.title}/>
                        <h1 className='w-[188px] flex justify-center'>{filme.title}</h1>
                        <Link to={`/${filme.id}`}>Detalhes do Filme</Link>
                    </div>
                ))}
            </Slider>
        </div>
        </>
    )
}