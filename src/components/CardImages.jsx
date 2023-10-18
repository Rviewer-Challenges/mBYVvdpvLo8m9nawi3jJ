import React from 'react'

const CardImages = ({shuffled}) => {
    return (
        <>
            {

                shuffled.map((character) => (
                    <div key={character.id}>
                        <img src={character.image} />
                    </div>
                ))

            }

        </>
    )
}

export default CardImages