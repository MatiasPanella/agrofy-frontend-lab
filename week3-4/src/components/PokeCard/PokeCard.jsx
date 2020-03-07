import React from 'react'

const PokeCard = ({id, name, type, img}) =>{
    return(
        <div>
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <p>Type: {type}</p>
            <button id={id} className='btn-check-pokemon'>Agg to favs</button>
        </div>
    )
}
export default PokeCard