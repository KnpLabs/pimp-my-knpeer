import React from 'react'
import './color.css'

const Color = ({setColor, colors = []}) => {
    return (
        <div className="colors">
            {colors.map(color => 
                <div key={color} className={ `color ${color}`} onClick={() => setColor(color) }></div>
            )}
        </div>
    )
}

export default Color;
