import React from 'react'

export default function Cats() {
    const API_KEY = '56816ee9-597b-40d3-9e4a-89c79093fc18'

    async function getCats() {
        try{
            fetch('https://cdn2.thecatapi.com/images/search?limit=100&size=small', {mode: 'cors'} )
            .then(response => response.json())
            .then(parsed => parsed)
        }
        catch{error => console.log(error)}
    }

    return (
        <div>
            
        </div>
    )
}
