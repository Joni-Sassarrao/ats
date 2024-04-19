import phone1 from "/phone-1.png"
import phone2 from "/phone-2.png"

export default function ConteudoPrincipalSobre(){
    return(
        <>
        <div className="container-sobre">
            <div className="container-filho-sobre">
                <h1>Bem-Vindo à revolução dos vídeos!</h1>
                <h2>Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.</h2>
                <button>Baixe o app</button>
            </div>
            <div className="telefones">
                <img src={phone1} alt="" />
                <img src={phone2} alt="" />
            </div>
        </div>
        </>
    )
}