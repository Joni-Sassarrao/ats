import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function Contato(){
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            alert("Preencha todos os campos");
            return
        }

        const templateParams = {
            from_name: name,
            from_message: message,
            from_email: email
        }

        emailjs.send("service_el4pjf2", "template_rpx1457", templateParams, "3yRqw9XZ68Ns8sLlQ")
        .then((response)=> {
            console.log("EMAIL ENVIADO", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
        }, (error)=>{
            console.log("ERRO", error)
        })
    }

    return(
    <>
    <div className="bg-gradient-to-b from-black to bg-red-700">
        <h1 className="flex justify-center text-white font-Montserrat text-3xl mt-16 mb-16">Formulário de Contato</h1>
        <div className="flex justify-center">
            <form onSubmit={sendEmail} className="flex flex-col font-Montserrat w-[500px]">
                <label className="text-white" htmlFor="nome">Nome:</label>
                <input className="border-2 rounded-lg bg-black text-white p-1" type="text" onChange={(e) => setName(e.target.value)} value={name} required/><br/>
                <label className="text-white" htmlFor="email">Email:</label>
                <input className="border-2 rounded-lg bg-black text-white p-1" type="email" onChange={(e) => setEmail(e.target.value)} value={email} required/><br/>
                <label className="text-white" htmlFor="mensagem">Mensagem:</label><br/>
                <textarea className="border-2 rounded-lg bg-black text-white p-1" rows="4" onChange={(e) => setMessage(e.target.value)} value={message} required></textarea><br/>
                <button className="text-white bg-black border-2 rounded-lg h-[36px] mt-14 mb-10 p-1 hover:shadow-xl hover:duration-150" type="submit" value="Enviar">Enviar</button>
            </form>
        </div>
    </div>
    <div className="bg-gradient-to-t from-black to bg-red-700 h-[181px]"></div>
    </>
    )
}