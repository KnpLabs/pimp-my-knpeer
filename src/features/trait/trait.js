import React from 'react'
import { useDispatch } from 'react-redux'
import Color from '../../Components/Color/color'
import { selectTrait } from '../avatar/avatarSlice'
import './trait.css'

const toggleTrait = traitName => {
    document.querySelector(`[data-is=${traitName}] .selection`).classList.toggle('hidden')
    const chevronSrc = document.querySelector(`[data-is=${traitName}] .chevron`).src
    document.querySelector(`[data-is=${traitName}] .chevron`).src = chevronSrc.includes('down')
        ? '/Images/Assets/chevron-up.svg'
        : '/Images/Assets/chevron-down.svg'

}

export function Trait({name, traits = [], colors= []}) {
    const dispatch = useDispatch()
    const handleClick = (trait) => () => {
        console.log(trait)
        dispatch(selectTrait(trait))
    }
    return (
        <div className="traits" data-is={name}>
            <div className="header" onClick={() => toggleTrait(name)}>
                <h3>{ name }</h3>
                <img className="chevron" src="/Images/Assets/chevron-down.svg" />
            </div>
            <div className="selection hidden">
                {colors.length > 0 && <Color colors={colors} />}
                {traits.map(Trait =>
                    <button className="trait" key={'button' + Trait.render.name} onClick={handleClick(Trait.render.name)}>
                        <Trait />
                    </button>
                )}
            </div>
        </div>
    )
}
