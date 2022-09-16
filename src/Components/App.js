import React from 'react'
import './App.css';
import { AvatarProvider } from './Context/avatarContext'
import Canvas from './Canvas/canvas'
import Menu from './Menu/menu'
import Navigation from './Navigation/navigation'
import { NavigationProvider } from './Context/navigationContext'

const App = () => (
  <div className="app">
    <AvatarProvider>
        <NavigationProvider>
            <img className="logo" src="/Images/logo.png" alt="logo"/>
            <div className='wrapper'>
                <Canvas />
                <Navigation />
            </div>
            <Menu />
        </NavigationProvider>
    </AvatarProvider>
  </div>
)

export default App;
