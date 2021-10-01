import React, { createContext, useContext, useState } from 'react'


const AvatarContext = createContext();

export const AvatarProvider = ({children}) => {
    const [face, setFace] = useState(null)
    const avatar = {
        traits: {
            face: face,
            eyes: null,
            eyebrows: null,
            hair: null,
            beard: null,
            body: null,
            accessories: null,
            background: null,
        },
        setFace
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
