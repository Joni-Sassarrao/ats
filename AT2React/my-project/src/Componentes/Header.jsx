import NavBar from "./NavBar"

export default function Header(){
    return(
        <>
        <div className="flex bg-black text-white font-Montserrat text-4xl p-4 justify-between">
            <h1>CJM</h1>
            <NavBar/>
        </div>
        </>
    )
}