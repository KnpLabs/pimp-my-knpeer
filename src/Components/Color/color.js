import React from 'react'
import './color.css'

const Color = ({setColor, colors = [], selectedColor = null}) => {
    return (
        <div className="colors">
            {colors.map(color =>
                <div
                    key={color}
                    className={ `color ${color} ${selectedColor === color ? 'selected' : ''}`}
                    onClick={() => setColor(color) }
                >
                </div>
            )}
        </div>
    )
}

export default Color;
