import React from 'react'
import './trait.css'
import { useAvatarContext } from '../Context/avatarContext'

const Trait = ({name, setTrait, traits = []}) => {
    return (
        <div className="traits">
            <h3>{ name }</h3>
            <div className="selection">
                {traits.map(trait => 
                    <button className="trait" key={ 'button' + trait} onClick={() => setTrait(trait) }>
                        <img src={trait} />
                    </button>
                )}
            </div>
        </div>
    )
}

export default Trait;
