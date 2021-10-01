import React from 'react'
import './trait.css'

const toggleTrait = traitName => {
    document.querySelector(`[data-is=${traitName}] .selection`).classList.toggle('hidden')
    const chevronSrc = document.querySelector(`[data-is=${traitName}] .chevron`).src
    document.querySelector(`[data-is=${traitName}] .chevron`).src = chevronSrc.includes('down')
        ? '/Images/Assets/chevron-up.svg'
        : '/Images/Assets/chevron-down.svg'

}

const Trait = ({name, setTrait, traits = []}) => {
    return (
        <div className="traits" data-is={ name }>
            <h3>{ name }</h3>
            <img
                className="chevron" 
                src="/Images/Assets/chevron-down.svg"
                onClick={() => toggleTrait(name)}
            />
            <div className="selection hidden">
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
