import React from 'react'
import './canvas.css'
import { useAvatarContext } from '../Context/avatarContext'

const Canvas = () => {
    const avatar = useAvatarContext()
    const avatarKeys = Object.keys(avatar.traits)

    return (
        <div className="canvas">
            <img className="logo" src="/Images/logo.png" />
            {avatarKeys.map(key =>               
                <div key={ key } className={ `avatar-trait ` + key }>
                {avatar.traits[key] && <img className="avatar-layering-svg" src={avatar.traits[key]} />}
            </div>)}
        </div>
    )
}

export default Canvas;
