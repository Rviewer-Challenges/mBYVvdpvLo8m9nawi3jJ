import { useEffect, useState } from "react"


export const useGetImages = () => {

    const [characters, setCharacters] = useState([])
    
    const getData = async () => {

        try {

            const data = await fetch(`https://rickandmortyapi.com/api/character`)
            const characters = await data.json()

            setCharacters(characters.results)

        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {

        getData()

    }, [])


    return { characters }

}
