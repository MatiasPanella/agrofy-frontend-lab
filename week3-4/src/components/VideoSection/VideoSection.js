import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#ffde9b" fill-opacity="1" d="M0,96L0,96L180,96L180,128L360,128L360,32L540,32L540,96L720,96L720,160L900,160L900,64L1080,64L1080,128L1260,128L1260,160L1440,160L1440,0L1260,0L1260,0L1080,0L1080,0L900,0L900,0L720,0L720,0L540,0L540,0L360,0L360,0L180,0L180,0L0,0L0,0Z"></path></svg>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/c2edLO4GxGs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="cont"><h2>Checkout the Official Pokémon YouTube Chanell</h2>
            <button id="btn-iframe">View More</button>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#ffde9b" fill-opacity="1" d="M0,96L0,96L180,96L180,128L360,128L360,32L540,32L540,96L720,96L720,160L900,160L900,64L1080,64L1080,128L1260,128L1260,160L1440,160L1440,320L1260,320L1260,320L1080,320L1080,320L900,320L900,320L720,320L720,320L540,320L540,320L360,320L360,320L180,320L180,320L0,320L0,320Z"></path></svg>
        </div>
    )
}
export default VideoSection