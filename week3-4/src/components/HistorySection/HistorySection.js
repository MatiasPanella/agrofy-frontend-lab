import React from 'react';
import './HistorySection.css';

const HistorySection = () =>{
    return(
        <div >
            <h1 id='title'>Pokemon History</h1>
            <section id='historySection'>
                <article id='art1'>
                    <div className='logo1'>
                        <img src='../../imgs/icon1.svg'/>
                        <h2>1980</h2>
                    </div>
                    <div className='first-steps'>
                        <h2>First Steps</h2>
                        <p>
                        Pokémon is short for “Pocket Monsters", the original Japanese name. The franchise has its roots in a gaming
                        magazine in the early 1980s in Japan—Game Freak, started by Satoshi Tajiri and Ken Sugimori. Tajiri was the
                        writer, while Sugimori was the illustrator.
                        </p>
                    </div>
                </article>
                
                <article id='art2'>
                    <div className='logo2'>
                        <img src='../../imgs/nintendo-switch.svg'/>
                        <h2>1996</h2>
                    </div>
                    <div className='game-boy'>
                        <h2>Game Boy</h2>
                        <p>26 February 1996 marks the debut of the Pokémon franchise in the form of both those games on the Game Boy in
                        Japan. At its heart, Pocket Monsters: Red and Green was a very basic Japanese role-playing game.</p>
                    </div>
                </article>

                <article id='art3'>
                    <div className='logo3'>
                        <img src='../../imgs/pokemon.svg'/>
                        <h2>1998</h2>
                    </div>
                    <div className='pikachu'>
                        <h2>Pikachu</h2>
                        <p>
                        The popularity of the anime and Yellow, I believe, led to Pikachu becoming the most recognizable and loved Pokémon out there. Pocket Monsters’ success led to North America getting the games in 1998 for the Game Boy (as Pokémon Red and Blue). These few years in the public saw Pokémon go from a game about a hobby to a worldwide phenomenon
                        </p>
                    </div>
                </article>
            </section>
        </div>
    )
}
export default HistorySection