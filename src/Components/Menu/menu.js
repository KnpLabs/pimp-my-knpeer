import React from 'react'
import './menu.css'
import Trait from '../Trait/trait'
import { useAvatarContext } from '../Context/avatarContext'

const Menu = () => {
    const { 
        setFace, 
        setEyes, 
        setBody, 
        setEyebrows, 
        setAccessoires,
        setBeard,
        setHair,
        setBackground 
    } = useAvatarContext()

    const faces = [
        '/Images/Faces/1.svg',
        '/Images/Faces/2.svg',
    ]

    const eyes = [
        '/Images/Eyes/yeux-maquille.svg',
        '/Images/Eyes/yeux-normal.svg'
    ]

    const body = [
        '/Images/Body/Corps-nu.svg'
    ]

    const eyebrows = []

    const accessoires = []

    const beard = []

    const hairs = []

    const background = [
        '/Images/Background/Bulles-Fond.svg'
    ]

    return (
        <div className="menu">
            <Trait name="Visages" traits={faces} setTrait={setFace} />
            <Trait name="Yeux" traits={eyes} setTrait={setEyes} />
            <Trait name="Sourcils" traits={eyebrows} setTrait={setEyebrows} />
            <Trait name="Cheveux" traits={hairs} setTrait={setHair} />
            <Trait name="Barbes" traits={beard} setTrait={setBeard} />
            <Trait name="Corps" traits={body} setTrait={setBody} />
            <Trait name="Accessoires" traits={accessoires} setTrait={setAccessoires} />
            <Trait name="Fond" traits={background} setTrait={setBackground} />
        </div>
    )
}

export default Menu;
