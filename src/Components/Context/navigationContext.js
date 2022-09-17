import React, { createContext, useContext, useState } from 'react'

const NavigationContext = createContext();

export const NavigationProvider = ({children}) => {
    const [currentComponent, setCurrentComponent] = useState(null)

    const navigation = {
        currentComponent,
        setCurrentComponent,
    }

    return (
        <NavigationContext.Provider value={ navigation }>
            { children }
        </NavigationContext.Provider>
    )
}

export const useNavigationContext = () => {
    const navigation = useContext(NavigationContext)

    return navigation
}
