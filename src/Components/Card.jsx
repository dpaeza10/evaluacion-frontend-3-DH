import { useState } from 'react'

function Card ({userName, hexColor}) {


    return(
        <div class="cardContainer">
            <p>Hola <span class="userName">{userName}</span>!</p>
            <p>Sabemos que tu color favorito es:</p>
            <div 
                style={{ backgroundColor: hexColor}}
                class="hexColorContainer"
            >
                {hexColor}
            </div>
        </div>
    )
}

export default Card;