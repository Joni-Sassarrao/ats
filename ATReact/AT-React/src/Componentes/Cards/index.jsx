import yt from '/public/Ellipse-youtube.jpg'
import tk from '/public/Ellipse-tiktok.jpg'
import fb from '/public/Ellipse-facebook.jpg'
import ig from '/Ellipse-instagram.jpg'

export default function Cards(){
    return(
        <>
        <div className="All-Cards">
            <div className="card-1">
                <div>
                    <h1>01</h1>
                    <img src={yt} alt="" />
                    <h2>Youtube</h2>
                    <p>Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.</p>
                </div>
            </div>
            <div className="card-2">
                <div>
                    <h1>02</h1>
                    <img src={tk} alt="" />
                    <h2>Tiktok</h2>
                    <p>Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do Tiktok.</p>
                </div>
            </div>
            <div className="card-3">
                <div>
                    <h1>03</h1>
                    <img src={fb} alt="" />
                    <h2>Facebook</h2>
                    <p>Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.</p>
                </div>
            </div>
            <div className="card-4">
                <div>
                    <h1>04</h1>
                    <img src={ig} alt="" />
                    <h2>Instagram</h2>
                    <p>Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.</p>
                </div>
            </div>
        </div>
        </>
    )
}