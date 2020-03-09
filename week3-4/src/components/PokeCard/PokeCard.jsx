import React, { useState, useEffect} from 'react'

const PokeCard = ({ id, name, type, img, favs, pokemones, setPokemones}) => {
    const [active, setActive] = useState(true)
    const [styles, setStyles] = useState({
        classes: 'pokemones div noActive',
        buttonText: 'Add to favs'
    })
    useEffect(()=>{
            if(localStorage.getItem(id)!=null){
                changeClass()
            }
    }, [])
    function removeLocalStorage(){
        localStorage.removeItem(id)
    }
    function addInLocalStorage(pokemonObj) {
        localStorage.setItem(id, JSON.stringify(pokemonObj))
    }
    function changeClass() {
        const objPokemon = {
            name: name,
            id: id,
            type: type,
            image: img
        }
        if (!favs) {
            if (!active) {
                setActive(true)
                removeLocalStorage()
                setStyles({
                    classes: 'pokemones div noActive',
                    buttonText: 'Add to favs'
                })
            } else {
                setActive(false)
                addInLocalStorage(objPokemon)
                setStyles({
                    classes: 'pokemones div active',
                    buttonText: 'Remove'
                })
            }
        } else {
            if (!active) {
                setActive(true)
                removeLocalStorage();
               // setPokemones(pokemones.filter(x => x.id != id));
            }
            else {
                setActive(false)
                setStyles({
                    classes: 'pokemones div active',
                    buttonText: 'Remove'
                })
            }
        }
    }
    return (
        <div>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Type: {type}</p>
            <button id={id} className={styles.classes} onClick={() => changeClass()}>{styles.buttonText}</button>
        </div>
    )
}
export default PokeCard