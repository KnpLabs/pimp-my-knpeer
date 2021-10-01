import React from 'react'
import './menu.css'
import Trait from '../Trait/trait'
import { useAvatarContext } from '../Context/avatarContext'

const Menu = () => {
    const { setFace } = useAvatarContext()
    const faces = [
        '/Images/Faces/1.svg',
        '/Images/Faces/2.svg',
    ]

    return (
        <div className="menu">
            <Trait name="Visages" traits={faces} setTrait={setFace} />
        </div>
    )
}

export default Menu;
