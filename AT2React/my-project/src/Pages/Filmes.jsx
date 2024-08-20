import { useState, useEffect } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"

export default function Filmes(){

    const [filmes, setFilmes] = useState([])

    const setinha =  React.useRef(null);

    const setinha2 =  React.useRef(null);

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
        <h1 className="flex justify-center text-3xl text-white mt-8 font-Montserrat">Filmes de Terror</h1>
        <div className='flex wrap justify-center mt-10 bg-gradient-to-b from-black to bg-cyan-500'>
            <div className='flex items-center'>
                <button className='font-fira text-2xl text-white' onClick={() => setinha?.current?.slickPrev()}>{'<--'}</button>
            </div>
            <Slider arrows={false} ref={setinha} {...settings} className='flex flex-row w-[70%] rounded-lg p-10'>
                {filmes.map(filme =>(
                    <div className='ml-[55px]' key={filme.id}>
                        <img className='rounded-md border' src={`https://image.tmdb.org/t/p/w200/${filme.poster_path}`} alt={filme.title}/>
                        <Link className='hover:bg-stone-800 hover:duration-200 bg-black text-white rounded-lg border w-[203px] flex justify-center mt-[20px] font-Montserrat' to={`/${filme.id}`}>Detalhes do Filme</Link>
                    </div>
                ))}
            </Slider>
            <div className='flex items-center'>
                <button className='font-fira text-2xl text-white' onClick={() => setinha?.current?.slickNext()}>{'-->'}</button>
            </div>
        </div>
        <div className='bg-gradient-to-t from-black to bg-cyan-500 mt-[-32px]'>
            <h1 className="flex justify-center text-3xl text-white mt-8 font-Montserrat">Filmes de Comédia</h1>
            <div className='flex wrap justify-center mt-10'>
                <div className='flex items-center'>
                    <button className='font-fira text-2xl text-white' onClick={() => setinha2?.current?.slickPrev()}>{'<--'}</button>
                </div>
                <Slider arrows={false} ref={setinha2} {...settings} className='flex flex-row w-[70%] rounded-lg p-10'>
                    {filmes.map(filme =>(
                        <div className='ml-[55px]' key={filme.id}>
                            <img className='rounded-md border' src={`https://image.tmdb.org/t/p/w200/${filme.poster_path}`} alt={filme.title}/>
                            <Link className='hover:bg-stone-800 hover:duration-200 bg-black text-white rounded-lg border w-[203px] flex justify-center mt-[20px] font-Montserrat' to={`/${filme.id}`}>Detalhes do Filme</Link>
                        </div>
                    ))}
                </Slider>
                <div className='flex items-center'>
                    <button className='font-fira text-2xl text-white' onClick={() => setinha2?.current?.slickNext()}>{'-->'}</button>
                </div>
            </div>
        </div>
        </>
    )
}