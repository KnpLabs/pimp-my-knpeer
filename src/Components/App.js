import React from 'react'
import './App.css';
import { AvatarProvider } from './Context/avatarContext'
import Canvas from './Canvas/canvas'
import Menu from './Menu/menu'
import Navigation from './Navigation/navigation'
import { NavigationProvider } from './Context/navigationContext'

const App = () => (
  <div className="app">
    <NavigationProvider>
        <AvatarProvider>
            <img className="logo" src="/Images/logo.png" />
            <div className='wrapper'>
                <Canvas />
                <Navigation />
            </div>
            <Menu />
        </AvatarProvider>
    </NavigationProvider>
  </div>
)

export default App;
