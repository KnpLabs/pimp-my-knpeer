import React from 'react'
import './App.css';
import { AvatarProvider } from './Context/avatarContext'
import Canvas from './Canvas/canvas'
import Menu from './Menu/menu'

const App = () => (
  <div className="app">
    <AvatarProvider>
      <Canvas />
      <Menu />
    </AvatarProvider>
  </div>
)

export default App;