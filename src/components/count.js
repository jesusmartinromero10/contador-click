import React from "react";
import '../styles/style-count.css'

function Count( { numClick }){
  return (
    <div className="count">

      { numClick }

    </div>
  )
}

export default Count;