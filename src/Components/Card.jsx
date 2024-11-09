import { useState } from 'react'

function Card ({userName, hexColor}) {


    return(
        <div className="cardContainer">
            <p>Hola <span className="userName">{userName}</span>!</p>
            <p>Sabemos que tu color favorito es:</p>
            <div 
                style={{ backgroundColor: hexColor}}
                className="hexColorContainer"
            >
                {hexColor}
            </div>
        </div>
    )
}

export default Card;