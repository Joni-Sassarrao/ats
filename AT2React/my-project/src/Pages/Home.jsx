import { useState, useEffect } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../artigos.json'
import data2 from '../../destaques.json'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"

export default function Home(){

    const [filmes, setFilmes] = useState([])

    const setinha =  React.useRef(null);

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
        <h1 className="flex justify-center text-3xl text-white mt-8">Novidades no Mundo dos Filmes!</h1>
        <div className='flex wrap justify-center mt-10 bg-gradient-to-b from-black to bg-red-700'>
            <div className='flex items-center'>
                <button className='font-fira text-2xl text-white' onClick={() => setinha?.current?.slickPrev()}>{'<--'}</button>
            </div>
            <Slider arrows={false} ref={setinha} {...settings} className='flex flex-row w-[70%] rounded-lg p-10'>
                {filmes.map(filme =>(
                    <div className='ml-[55px]' key={filme.id}>
                        <img className='rounded-md border' src={`https://image.tmdb.org/t/p/w200/${filme.poster_path}`} alt={filme.title}/>
                        <Link className='hover:bg-stone-800 hover:duration-200 bg-black text-white rounded-lg border w-[203px] flex justify-center mt-[20px]' to={`/${filme.id}`}>Detalhes do Filme</Link>
                    </div>
                ))}
            </Slider>
            <div className='flex items-center'>
                <button className='font-fira text-2xl text-white' onClick={() => setinha?.current?.slickNext()}>{'-->'}</button>
            </div>
        </div>
        <div className='bg-gradient-to-t from-black to bg-red-700'>
            <h1 className='flex justify-center text-3xl text-white mb-5'>Destaques da Semana</h1>
            <div className='flex flex-col items-center'>
                <div className="flex flex-col w-[800px] items-center">
                    {
                        (data2.map)(
                            (filme, index) =>(
                                <>
                                <div className="card bg-[#0f0f0f] mt-4 rounded-lg flex items-center" key={index}>
                                    <img className="w-48 flex rounded-3xl p-3" src={filme.image}/>
                                    <div className="ml-5 mt-1">
                                        <h1 className="text-lg m-2 mb-3 text-white font-Montserrat">{filme.title}</h1>
                                        <p className="text-base ml-[13px] mr-[130px] text-white">{filme.text}</p>
                                    </div>
                                </div>
                                <div className='bg-black h-[30px]'></div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    )
}