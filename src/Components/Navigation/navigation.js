import React from 'react'
import './navigation.css'
import { useNavigationContext } from '../Context/navigationContext'
import { useAvatarContext } from '../Context/avatarContext'

const changeTrait = (navigation, avatar, isNext = false) => {
    let currentTrait = null
    let currentTraitKey = null
    console.log(navigation.currentComponent)

    Object.entries(avatar.getters).filter(([key, trait]) => {
        console.log('key' . key)
        console.log(trait.componentName)
        if (trait.componentName === navigation.currentComponent) {
            currentTrait = trait
            currentTraitKey = key
        }
    })

    // console.log(currentTraitKey)
    // console.log(currentTrait)

    if (currentTrait && currentTraitKey) {
        const traitList = avatar.traits[currentTraitKey]
        const currentIndex = traitList.indexOf(currentTrait)
        const index = isNext
            ? currentIndex === traitList.length ? 0 : currentIndex + 1
            : currentIndex === 0 ? traitList.length : currentIndex - 1
        const nextTrait = traitList[index]

        avatar.setters[currentTraitKey](nextTrait)
    }

}

const Navigation = () => {
    const navigation = useNavigationContext()
    const avatar = useAvatarContext()

    return (
        <div className='navigation'>
            <button onClick={() => changeTrait(navigation, avatar)}>
                <img src="/Images/Assets/left-arrow.svg" alt='previous'/>
            </button>
            <button onClick={() => changeTrait(navigation, avatar, true)}>
                <img src="/Images/Assets/right-arrow.svg" alt='next'/>
            </button>
        </div>
    )
}

export default Navigation;