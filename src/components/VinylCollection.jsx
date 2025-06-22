import React, { useState } from 'react';
import '../styles/VinylCollection.css';

const vinylCollection = [
  { id: "AB_CT", imgSrc: "../assets/vinyl_covers/AB_CT.png", alt: "Action Bronson - Cocodrilla Turbo" },
  { id: "AR_S", imgSrc: "../assets/vinyl_covers/AR_S.jpg", alt: "Aesop Rock - Skelethon" },
  { id: "ARXB_G", imgSrc: "../assets/vinyl_covers/ARXB_G.png", alt: "Aesop Rock x Blockhead - Garbology" },
  { id: "BE_DSAM", imgSrc: "../assets/vinyl_covers/BE_DSAM.jpg", alt: "Billie Eilish - dont smile at me" },
  { id: "BE_HTE", imgSrc: "../assets/vinyl_covers/BE_HTE.png", alt: "Billie Eilish - Happier Than Ever" },
  { id: "C_MVA", imgSrc: "../assets/vinyl_covers/C_MVA.png", alt: "C148 - Minecraft - Volume Alpha" },
  { id: "FO_B", imgSrc: "../assets/vinyl_covers/FO_B.png", alt: "Frank Ocean - Blonde" },
  { id: "LDR_BTD", imgSrc: "../assets/vinyl_covers/LDR_BTD.png", alt: "Lana Del Rey - Born to Die" },
  { id: "M_M", imgSrc: "../assets/vinyl_covers/M_M.png", alt: "Madvillain - Madvillainy" },
  { id: "MD_MF", imgSrc: "../assets/vinyl_covers/MD_MF.png", alt: "MF DOOM - MM..FOOD" },
  { id: "MD_OD", imgSrc: "../assets/vinyl_covers/MD_OD.png", alt: "MF DOOM - Operation: Doomsday" },
  { id: "MM_C", imgSrc: "../assets/vinyl_covers/MM_Circles.jpg", alt: "Mac Miller - Circles" },
  { id: "MM_NPR", imgSrc: "../assets/vinyl_covers/MM_NPR.jpg", alt: "Mac Miller - NPR Music Tiny Desk Concert" },
  { id: "MM_S", imgSrc: "../assets/vinyl_covers/MM_Swimming.png", alt: "Mac Miller - Swimming in Circles" },
  { id: "MM_WMWTSO", imgSrc: "../assets/vinyl_covers/MM_WMWTSO.png", alt: "Mac Miller - Watching Movies with the Sound Off" },
  { id: "OR_G", imgSrc: "../assets/vinyl_covers/OR_G.png", alt: "Olivia Rodrigo - Guts" },
  { id: "OR_S", imgSrc: "../assets/vinyl_covers/OR_S.png", alt: "Olivia Rodrigo - SOUR" },
  { id: "RTJ_RTJ3", imgSrc: "../assets/vinyl_covers/RTJ_RTJ3.png", alt: "Run the Jewels - Run the Jewels 3" },
  { id: "TTC_CMIYGL", imgSrc: "../assets/vinyl_covers/TTC_CMIYGL.png", alt: "Tyler the Creator - CALL ME IF YOU GET LOST" },
  { id: "TTC_G", imgSrc: "../assets/vinyl_covers/TTC_G.png", alt: "Tyler the Creator - Goblin" },
  { id: "TTC_I", imgSrc: "../assets/vinyl_covers/TTC_I.png", alt: "Tyler the Creator - IGOR" },
  { id: "TTC_FB", imgSrc: "../assets/vinyl_covers/TTC_FB.jpg", alt: "Tyler the Creator - Flower Boy" },
  { id: "VGT_ACBC", imgSrc: "../assets/vinyl_covers/VGT_ACBC.jpg", alt: "Vince Guaraldi Trio - A Charlie Brown Christmas" },
];



function VinylCollection() {
    // State to track the hovered album title
    const [albumTitle, setAlbumTitle] = useState("");

    // Handle mouseover event
    const handleMouseOver = (e) => {
        const hoveredAlt = e.target.getAttribute("alt");
        setAlbumTitle(hoveredAlt);
    };

    // Handle mouseout event
    const handleMouseOut = () => {
        setAlbumTitle("");
    };

    return (
        <>
            <h2>My Vinyl Collection</h2>
            <div
                id="slideshow-container"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                {vinylCollection.map((vinyl) => (
                <a key={vinyl.id} className="slide" href={`#${vinyl.id}`}>
                    <img
                    className="slide cursor"
                    src={vinyl.imgSrc}
                    alt={vinyl.alt}
                    />
                </a>
                ))}
            </div>
            <div style={{ height: "1em" }}>
                <p id="slideshow-text">{albumTitle}</p>
            </div>
        </>  
    );
}
  
export default VinylCollection;
