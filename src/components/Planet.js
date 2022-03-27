import React from "react";
import { useQuery
 
} from "react-query";
import Planet from "./Planets";

const fetchPlanets = async () => {
    const res = await fetch('https://swapi.dev/api/planets/')
    return res.json()
}

const Planets = () => {
    const { data, status } = useQuery('planets', fetchPlanets)
    console.log(data)
    return (
        <div>
            
            <h1>{status}</h1>
            {status === 'loading' && (<div> Loading Page...</div>)}
            {status === 'error' && (<div> Error Loading Page</div>)}
            {status === 'success' && (<div>{data.results.map(planet => <Planet key={planet.name} planet={planet}/>)}</div>)}
            


        </div>
    )
}
export default Planets