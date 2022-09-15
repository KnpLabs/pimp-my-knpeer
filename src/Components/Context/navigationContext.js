import React, { createContext, useContext, useState } from 'react'

const NavigationContext = createContext();

export const NavigationProvider = ({children}) => {

    const navigation = {
    }

    return (
        <NavigationContext.Provider value={navigation}>
            {children}
        </NavigationContext.Provider>
    )
}