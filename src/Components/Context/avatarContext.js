import React, { createContext, useContext, useState } from 'react'
import {ReactComponent as CheeksNose1} from '../../Assets/CheeksNose/cheeksNose1.svg'
import {ReactComponent as CheeksNose2} from '../../Assets/CheeksNose/cheeksNose2.svg'
import {ReactComponent as CheeksNose3} from '../../Assets/CheeksNose/cheeksNose3.svg'

const getCheeksNose = (faceColor, face) => {
    if (face !== null && (faceColor === 'pink1' || faceColor === 'pink2')) {
        return CheeksNose1.render.name
    }

    if (face !== null && (faceColor === 'beige1' || faceColor === 'beige2')) {
        return CheeksNose2.render.name
    }

    if (face !== null && (faceColor === 'brown1' || faceColor === 'brown2')) {
        return CheeksNose3.render.name
    }

    return null
}

const AvatarContext = createContext();

export const AvatarProvider = ({children}) => {
    const [face, setFace] = useState(null)
    const [eyes, setEyes] = useState(null)
    const [mouth, setMouth] = useState(null)
    const [body, setBody] = useState(null)
    const [eyebrows, setEyebrows] = useState(null)
    const [hairColor, setHairColor] = useState(null)
    const [accessories, setAccessories] = useState(null)
    const [beard, setBeard] = useState(null)
    const [hair, setHair] = useState(null)
    const [background, setBackground] = useState(null)
    const [faceColor, setFaceColor] = useState('pink1')
    const [bodyColor, setBodyColor] = useState(null)
    const [backgroundColor, setBackgroundColor] = useState(null)

    const avatar = {
        traits: {
            background: {componentName: background, color: backgroundColor},
            face: {componentName: face, color: faceColor},
            body: {componentName: body, color: bodyColor},
            eyes: {componentName: eyes, color: null},
            cheeksNose: {componentName: getCheeksNose(faceColor, face), color: null},
            mouth: {componentName: mouth, color: null},
            eyebrows: {componentName: eyebrows, color: hairColor},
            hair: {componentName: hair, color: hairColor},
            beard: {componentName: beard, color: hairColor},
            accessories: {componentName: accessories, color: null},
        },
        setFace,
        setEyes,
        setMouth,
        setBody,
        setEyebrows,
        setAccessories,
        setBeard,
        setHair,
        setBackground,
        setFaceColor,
        setHairColor,
        setBodyColor,
        setBackgroundColor,
    }

    return (
        <AvatarContext.Provider value={ avatar }>
            { children }
        </AvatarContext.Provider>
    )
}

export const useAvatarContext = () => {
    const avatar = useContext(AvatarContext)

    return avatar
}
