import twlogo from "/twitter-logo.png"
import iglogo from "/instagram-logo.png"
import dclogo from "/discord-logo.png"

export default function ConteudoPrincipalContato(){
    return(
        <>
        <div className="contato">
            <div className="contato-logo">
                <h1>Dúvidas e suporte, entre em contato:</h1>
                <div className="contato-imagens">
                    <img src={twlogo} alt="" />
                    <img src={iglogo} alt="" />
                    <img src={dclogo} alt="" />
                </div>
            </div>
            <hr className="linha-vertical"/>
            <form>
                <div className="form-nome">
                    <p>Nome:</p><input type="text"/>
                </div>
                <div className="form-email">
                    <p>E-mail:</p><input type="email"/>
                </div>
                <div className="form-msg">
                    <p>Mensagem:</p><textarea/>
                </div>
                <div className="form-button">
                    <button>Enviar</button>
                </div>
            </form>
        </div>
        </>
    )
}