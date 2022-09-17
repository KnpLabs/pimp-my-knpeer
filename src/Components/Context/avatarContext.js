import React, { createContext, useContext, useState } from 'react'
import {ReactComponent as Face1} from '../../Assets/Faces/face1.svg'
import {ReactComponent as Face2} from '../../Assets/Faces/face2.svg'
import {ReactComponent as Face3} from '../../Assets/Faces/face3.svg'
import {ReactComponent as Face4} from '../../Assets/Faces/face4.svg'
import {ReactComponent as Face5} from '../../Assets/Faces/face5.svg'
import {ReactComponent as Face6} from '../../Assets/Faces/face6.svg'
import {ReactComponent as Eyes1} from '../../Assets/Eyes/eyes1.svg'
import {ReactComponent as Eyes2} from '../../Assets/Eyes/eyes2.svg'
import {ReactComponent as Mouth1} from '../../Assets/Mouth/mouth1.svg'
import {ReactComponent as Mouth2} from '../../Assets/Mouth/mouth2.svg'
import {ReactComponent as Mouth3} from '../../Assets/Mouth/mouth3.svg'
import {ReactComponent as Mouth4} from '../../Assets/Mouth/mouth4.svg'
import {ReactComponent as Mouth5} from '../../Assets/Mouth/mouth5.svg'
import {ReactComponent as Eyebrows1} from '../../Assets/Eyebrows/eyebrows1.svg'
import {ReactComponent as Eyebrows2} from '../../Assets/Eyebrows/eyebrows2.svg'
import {ReactComponent as Eyebrows3} from '../../Assets/Eyebrows/eyebrows3.svg'
import {ReactComponent as Eyebrows4} from '../../Assets/Eyebrows/eyebrows4.svg'
import {ReactComponent as Eyebrows5} from '../../Assets/Eyebrows/eyebrows5.svg'
import {ReactComponent as Body1} from '../../Assets/Body/body1.svg'
import {ReactComponent as Background1} from '../../Assets/Background/background1.svg'
import {ReactComponent as Accessorie1} from '../../Assets/Accessories/accessorie1.svg'
import {ReactComponent as Accessorie2} from '../../Assets/Accessories/accessorie2.svg'
import {ReactComponent as Accessorie3} from '../../Assets/Accessories/accessorie3.svg'
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
        getters: {
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
        setters: {
            face: setFace,
            eyes: setEyes,
            mouth: setMouth,
            body: setBody,
            eyebrows: setEyebrows,
            accessories: setAccessories,
            beard: setBeard,
            hair: setHair,
            background: setBackground,
            faceColor: setFaceColor,
            hairColor: setHairColor,
            bodyColor: setBodyColor,
            backgroundColor: setBackgroundColor,
        },
        traits: {
            face: [Face1, Face2, Face3, Face4, Face5, Face6],
            eyes: [Eyes1, Eyes2],
            mouth: [Mouth1, Mouth2, Mouth3, Mouth4, Mouth5],
            body: [Body1],
            eyebrows: [Eyebrows1, Eyebrows2, Eyebrows3, Eyebrows4, Eyebrows5],
            accessories: [Accessorie1, Accessorie2, Accessorie3],
            beard: [],
            hair: [],
            background: [Background1],
            faceColors: ['pink1', 'pink2', 'beige1', 'beige2', 'brown1', 'brown2'],
            hairColors: ['blond', 'ginger', 'red', 'brown', 'black', 'grey'],
            bodyColors: ['red', 'pink', 'yellow', 'green', 'blue', 'black'],
            backgroundColors: ['light-purple', 'light-pink', 'light-yellow', 'light-green', 'light-blue', 'light-black'],
            cheeksNose: [CheeksNose1, CheeksNose2, CheeksNose3],
        },
        isEmpty: !background
            && !face
            && !body
            && !eyes
            && !getCheeksNose(faceColor, face)
            && !mouth
            && !eyebrows
            && !hair
            && !beard
            && !accessories
        ,
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
