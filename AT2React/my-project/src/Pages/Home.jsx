import data from '../../artigos.json'

export default function Home(){

    return(
        <>
        <h1>Home</h1>
        <div>
            {
                (data.map)(
                    (filme, index)=>(
                        <>
                        <div key={index}>
                            <img src={filme.image}/>
                        </div>
                        </>
                    )
                )
            }
        </div>
        </>
    )
}