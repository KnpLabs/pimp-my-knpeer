import React, { createContext, useContext, useState } from 'react'


const AvatarContext = createContext();

export const AvatarProvider = ({children}) => {
    const [face, setFace] = useState(null)
    const [eyes, setEyes] = useState(null)
    const [body, setBody] = useState(null)
    const [eyebrows, setEyebrows] = useState(null)
    const [accessories, setAccessoires] = useState(null)
    const [beard, setBeard] = useState(null)
    const [hairs, setHair] = useState(null)
    const [background, setBackground] = useState(null)
    const avatar = {
        traits: {
            background: background,
            body: body,
            face: face,
            eyes: eyes,
            eyebrows: eyebrows,
            hair: hairs,
            beard: beard,
            accessories: accessories,
        },
        setFace,
        setEyes,
        setBody,
        setEyebrows,
        setAccessoires,
        setBeard,
        setHair,
        setBackground
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
