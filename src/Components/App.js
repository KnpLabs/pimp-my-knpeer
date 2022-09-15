import React from 'react'
import './App.css';
import { AvatarProvider } from './Context/avatarContext'
import Canvas from './Canvas/canvas'
import { Avatar } from '../features/avatar/Avatar';
import { store } from '../app/store';
import { Provider } from 'react-redux';
import { Menu } from '../features/menu/menu';

const App = () => (
  <div className="app">
    <img className="logo" src="/Images/logo.png" />
    <Provider store={store} />
    <Avatar />
    <Menu />
  </div>
)

export default App;
