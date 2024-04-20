import hero from '/Hero-image.png'

export default function PageInfo(){
    return(
        <>
        <div className="container">
            <div className="container-filho">
                <h1>Crie seus vídeos online</h1>
                <h2>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</h2>
                <button>Começar agora!</button>
            </div>
            <div>
                <img src={hero} alt="Imagem-Home" />
            </div>
        </div>
        </>
    )
}