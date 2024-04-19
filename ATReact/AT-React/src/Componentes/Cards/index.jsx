import yt from '/public/Ellipse-youtube-removebg-preview.png'
import tk from '/public/Ellipse-tiktok-removebg-preview.png'
import fb from '/public/Ellipse-facebook-removebg-preview.png'
import ig from '/public/Ellipse-instagram-removebg-preview.png'

export default function Cards(){
    return(
        <>
        <div className="All-Cards">
            <div className="card-1">
                    <div className="espaco">
                        <h1>01</h1>
                        <img src={yt} alt="" />
                    </div>
                    <h2>Youtube</h2>
                    <p>Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.</p>
            </div>
            <div className="card-2">
                <div className="espaco">
                    <h1>02</h1>
                    <img src={tk} alt="" />
                </div>
                    <h2>Tiktok</h2>
                    <p>Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do Tiktok.</p>
            </div>
            <div className="card-3">
                <div className="espaco">
                    <h1>03</h1>
                    <img src={fb} alt="" />
                </div>
                    <h2>Facebook</h2>
                    <p>Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.</p>
            </div>
            <div className="card-4">
                <div className="espaco">
                    <h1>04</h1>
                    <img src={ig} alt="" />
                </div>
                    <h2>Instagram</h2>
                    <p>Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.</p>
            </div>
        </div>
        </>
    )
}