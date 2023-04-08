import React from "react";

function Botton( { text, esBottonClick, handClick }) {
  return (
    <button 
      className={ esBottonClick ? 'boton-click' : 'boton-reset' } 
      onClick = {handClick}>
      { text } 
    </button>
  )
}

export default Botton;