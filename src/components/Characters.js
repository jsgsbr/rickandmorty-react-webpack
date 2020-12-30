import React, {useState, useEffect} from 'react'

const Characters = () => {

    const [character, setCharacter] = useState([])

    useEffect(() => {
        
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setCharacter(data.results))

    }, [])

    return (
        <div className="container">
            <div className="characters">
                {
                    character.map( item => (
                        <div className="box" key={item.id}>
                            <img src={item.image} alt={item.name}/>
                            <div className="character">
                                <h3 className="name">{item.name}</h3>
                                <p className="specie">{item.species}</p>
                                <p className="status">{item.status}</p>
                            </div>
                        </div>
                    ) )
                }
            </div>
        </div>
    )
}

export default Characters