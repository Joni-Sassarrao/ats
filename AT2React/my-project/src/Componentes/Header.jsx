import NavBar from "./NavBar"

export default function Header(){
    return(
        <>
        <div className="flex bg-black text-white font-K2D text-4xl p-4 justify-between">
            <h1>CJM</h1>
            <h1>Bem-Vindo ao CJM!</h1>
            <NavBar/>
        </div>
        </>
    )
}