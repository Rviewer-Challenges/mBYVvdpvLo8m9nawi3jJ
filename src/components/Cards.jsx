import React, { useEffect, useState } from 'react'
import { useGetImages } from '../async/useGetImages'
import CardImages from './CardImages'

const Cards = () => {

    const [shuffled, setShuffled] = useState([])
    const { characters } = useGetImages()

    useEffect(() => {
        setTimeout(() => {
            const shuffle = shuffleArray([...characters, ...characters])
            let images = shuffle.map((t) => t.image)
            setShuffled(images)
        }, 1000);

    }, [])

    function shuffleArray(a) {

        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }

        return a;

    }

    console.log(shuffled);

    return (
        <>
            <CardImages
                shuffled={shuffled}
            />  
        </>
    )
}

export default Cards