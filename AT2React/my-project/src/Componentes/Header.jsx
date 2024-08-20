import NavBar from "./NavBar"

export default function Header(){
    return(
        <>
        <div className="flex bg-black text-white font-Montserrat text-4xl p-4 justify-between">
            <h1>CJM</h1>
            <div className="flex items-center">
                <label className="text-white"><img src="./lupa.svg"></img></label>
                <input className="border rounded-2xl ml-3 text-lg bg-black text-white" type="text"/>
            </div>
            <NavBar/>
        </div>
        </>
    )
}