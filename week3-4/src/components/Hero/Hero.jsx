import React , {useState}from 'react'
import './Hero.css'

const Hero = () => {
    let style={
        height: '100%',
        width: '100%'}
    let style1={
        height: '100%',
        width: '100%'
    }
    let style2 = {
        stroke: 'none',
        fill: '#F0E482'
    }
    
    return (
        <div className='hero'>
            <div className="svg" style={style}>
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={style1}>

      <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={style2}></path>
        style="height: 100%; width: 100%;">
  
      </svg></div>

            <h1>Welcome to Pokedex</h1>
            <p>Join our comunity to find Pokémon's news.</p>
            <button class="btn">View more </button>
        </div>
    )
}
export default Hero