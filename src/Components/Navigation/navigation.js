import React from 'react'
import './navigation.css'
import { useNavigationContext } from '../Context/navigationContext'
import { useAvatarContext } from '../Context/avatarContext'

const changeTrait = (navigation, avatar, isNext = false) => {
    let currentTrait = null
    let currentTraitKey = null

    if (navigation.currentComponent === null) return

    Object.entries(avatar.getters).filter(([key, trait]) => {
        if (trait.componentName === navigation.currentComponent) {
            currentTrait = trait
            currentTraitKey = key
        }

        return null
    })

    if (currentTrait && currentTraitKey) {
        const traitList = avatar.traits[currentTraitKey]
        const currentIndex = traitList.indexOf(traitList.filter(trait => trait.render.name === currentTrait.componentName)[0])
        const index = isNext
            ? currentIndex === (traitList.length - 1) ? 0 : currentIndex + 1
            : currentIndex === 0 ? (traitList.length - 1) : currentIndex - 1
        const nextTrait = traitList[index]

        avatar.setters[currentTraitKey](nextTrait.render.name)
        navigation.setCurrentComponent(nextTrait.render.name)
    }

}

const Navigation = () => {
    const navigation = useNavigationContext()
    const avatar = useAvatarContext()

    return (
        <div className='navigation'>
            <button onClick={() => changeTrait(navigation, avatar)} disabled={!navigation.currentComponent}>
                <img src="/Images/Assets/left-arrow.svg" alt='previous'/>
            </button>
            <button onClick={() => changeTrait(navigation, avatar, true)} disabled={!navigation.currentComponent}>
                <img src="/Images/Assets/right-arrow.svg" alt='next'/>
            </button>
        </div>
    )
}

export default Navigation;

