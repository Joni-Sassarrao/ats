import person from "/public/person-phone.png"

export default function Planos(){
    return(
        <>
        <div className="fundo">
            <div className="plano-top">
                <h1>Planos</h1>
            </div>
            <div className="servicos">
                <div className="individual">
                    <div className="cabeca-individual">
                        <h1>Individual</h1>
                    </div>
                    <p>1 Usuário</p>
                    <select name="individual-videos">
                        <option>10 vídeos R$15</option>
                    </select>
                    <div className="botao-individual">
                        <button>Cadastrar</button>
                    </div>
                </div>
                <div className="profissional">
                    <div className="cabeca-profissional-corporativo">
                        <h1>Profissional - Times</h1>
                    </div>
                    <p>1 - 10 Usuários</p>
                    <select className="profissionais-videos">
                        <option>Vídeos Ilimitados R$40</option>
                    </select>
                    <p>+10 Usuários</p>
                    <select className="profissionais-videos">
                        <option>Vídeos Ilimitados R$20</option>
                    </select>
                    <button>Cadastrar</button>
                </div>
                <div className="corporativo">
                    <div className="cabeca-profissional-corporativo">
                        <h1>Corporatio</h1>
                    </div>
                    <img src={person} alt="" />
                    <button>Entre Em Contato</button>
                </div>
            </div>
        </div>
        </>
    )
}