import { obtenerDatos } from "../lib/api"


async function List() { 
     const data = await obtenerDatos("argentina")
     console.log(data)
  return (
    <div >

        <h1>Lista de datos</h1>
        <ul>
            {data.map((item) => (
                <li key={item.name}>
                    <h2>{item.name}</h2>
                    <p>Capital: {item.capital}</p>
                    <p>topLevelDomain: {item.topLevelDomain}</p>
                    <p>alpha2Code: {item.alpha2Code}</p>
                    <p>alpha3Code: {item.alpha3Code}</p>
                    <p>callingCodes: {item.callingCodes}</p>
                    <p>capital: {item.capital}</p>
                    <p>altSpellings: {item.altSpellings}</p>
                    <p>region: {item.region}</p>

                </li>
            ))} 
        </ul>
        
    </div>


  )
}

export default List