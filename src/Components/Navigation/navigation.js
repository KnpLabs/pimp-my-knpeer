import React from 'react'
import './navigation.css'

const Navigation = () => {
    return (
        <div className='navigation'>
            <span><img className="previous" src="/Images/Assets/left-arrow.svg"/></span>
            <span><img className="next" src="/Images/Assets/right-arrow.svg"/></span>
        </div>
    )
}

export default Navigation;