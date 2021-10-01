import React from 'react'
import './canvas.css'
import { useAvatarContext } from '../Context/avatarContext'

const Canvas = () => {
    const avatar = useAvatarContext()
    const avatarKeys = Object.keys(avatar.traits)

    return (
        <div className="canvas">
            {avatarKeys.map(key => <div key={ key } className={ `avatar-trait ` + key }>
                {avatar.traits[key] && <img src={avatar.traits[key]} />}
            </div>)}
        </div>
    )
}

export default Canvas;
