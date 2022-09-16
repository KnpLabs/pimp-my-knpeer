import './trait.css'
import Color from '../Color/color'
import { useNavigationContext } from '../Context/navigationContext'

const toggleTrait = (traitName, componentName, navigation) => {
    document.querySelectorAll(`.traits:not([data-is=${traitName}]) .selection`).forEach(
        selection => {selection.classList.add('hidden')}
    )
    document.querySelectorAll(`.traits:not([data-is=${traitName}]) .chevron`).forEach(
        chevron => {chevron.setAttribute('src', '/Images/Assets/chevron-down.svg')}
    )

    document.querySelector(`[data-is=${traitName}] .selection`).classList.toggle('hidden')
    const chevronSrc = document.querySelector(`[data-is=${traitName}] .chevron`).src
    document.querySelector(`[data-is=${traitName}] .chevron`).src = chevronSrc.includes('down')
        ? '/Images/Assets/chevron-up.svg'
        : '/Images/Assets/chevron-down.svg'
}

const setNavigation = (navigation, traitName, componentName) => {
    document.querySelector(`[data-is=${traitName}] .chevron`).src.includes('up')
        ? navigation.setCurrentComponent(componentName)
        : navigation.setCurrentComponent(null)
}

const Trait = ({name, componentName, setColor, setTrait, selectedColor = null, selectedTrait = null, traits = [], colors = []}) => {
    const navigation = useNavigationContext()

    return (
        <div className="traits" data-is={ name }>
            <div className="header" onClick={() => toggleTrait(name, componentName, navigation)}>
                <h3>{ name }</h3>
                <img className="chevron" src="/Images/Assets/chevron-down.svg" alt="chevron"/>
            </div>

            <div className="selection hidden">
                {colors.length > 0 && <Color colors={colors} setColor={setColor} selectedColor={selectedColor} />}
                {traits.map(Trait =>
                    <button
                        className={`trait ${selectedTrait === Trait.render.name ? 'selected' : ''}`}
                        key={'button' + Trait.render.name}
                        onClick={() => {
                            setTrait(selectedTrait === Trait.render.name ? null : Trait.render.name)
                            setNavigation(navigation, Trait.render.name, name)
                        }}
                    >
                        <Trait />

                        {selectedTrait === Trait.render.name
                            ? <img
                                className="remove"
                                src="/Images/Assets/cross.svg"
                                onClick={e => {
                                    e.stopPropagation()
                                    setTrait(null)
                                }}
                            />
                            : null
                        }
                    </button>
                )}
            </div>
        </div>
    )
}

export default Trait;
