import React from 'react'
import './canvas.css'
import { useAvatarContext } from '../Context/avatarContext'

const getComponentByName = (name, traits) => {
    const components = [
        ...traits.face,
        ...traits.eyes,
        ...traits.mouth,
        ...traits.eyebrows,
        ...traits.body,
        ...traits.background,
        ...traits.accessories,
        ...traits.cheeksNose,
    ]

    return components.filter(component => component.render.name === name).shift();
}

const Canvas = () => {
    const avatar = useAvatarContext()
    const avatarKeys = Object.keys(avatar.getters)

    return (
        <div className="canvas">
            {avatarKeys.map(key => {
                const Svg = getComponentByName(avatar.getters[key].componentName, avatar.traits)

                return (
                    <div key={ key } className={ `avatar-trait ` + key }>
                        {Svg && <Svg className={avatar.getters[key].color} />}
                    </div>
                )
            })}
        </div>
    )
}

export default Canvas;
