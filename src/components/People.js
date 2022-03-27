import React from "react";
import { useQuery } from "react-query";
import Person from "./Person";

const fetchPeople = async () => {
    const res = await fetch('https://swapi.dev/api/people/')
    return res.json()
}

const People = () => {
   const {data, status}= useQuery('people', fetchPeople)
    return   (
        <div>
            
            <h1>{status}</h1>
            {status === 'loading' && (<div> Loading Page...</div>)}
            {status === 'error' && (<div> Error Loading Page</div>)}
            {status === 'success' && (<div>{data.results.map(person => <Person key={person.name} person={person}/>)}</div>)}
            


        </div>
    )
}
export default People