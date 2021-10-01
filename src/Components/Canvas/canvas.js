import React from 'react'
import './canvas.css'
import { useAvatarContext } from '../Context/avatarContext'
import {ReactComponent as Face1} from '../../Assets/Faces/face1.svg'
import {ReactComponent as Face2} from '../../Assets/Faces/face2.svg'
import {ReactComponent as Face3} from '../../Assets/Faces/face3.svg'
import {ReactComponent as Face4} from '../../Assets/Faces/face4.svg'
import {ReactComponent as Face5} from '../../Assets/Faces/face5.svg'
import {ReactComponent as Face6} from '../../Assets/Faces/face6.svg'
import {ReactComponent as Eyes1} from '../../Assets/Eyes/eyes1.svg'
import {ReactComponent as Eyes2} from '../../Assets/Eyes/eyes2.svg'
import {ReactComponent as Mouth1} from '../../Assets/Mouth/mouth1.svg'
import {ReactComponent as Mouth2} from '../../Assets/Mouth/mouth2.svg'
import {ReactComponent as Mouth3} from '../../Assets/Mouth/mouth3.svg'
import {ReactComponent as Mouth4} from '../../Assets/Mouth/mouth4.svg'
import {ReactComponent as Mouth5} from '../../Assets/Mouth/mouth5.svg'
import {ReactComponent as Eyebrows1} from '../../Assets/Eyebrows/eyebrows1.svg'
import {ReactComponent as Eyebrows2} from '../../Assets/Eyebrows/eyebrows2.svg'
import {ReactComponent as Eyebrows3} from '../../Assets/Eyebrows/eyebrows3.svg'
import {ReactComponent as Eyebrows4} from '../../Assets/Eyebrows/eyebrows4.svg'
import {ReactComponent as Eyebrows5} from '../../Assets/Eyebrows/eyebrows5.svg'
import {ReactComponent as Body1} from '../../Assets/Body/body1.svg'
import {ReactComponent as Background1} from '../../Assets/Background/background1.svg'
import {ReactComponent as Accessorie1} from '../../Assets/Accessories/accessorie1.svg'
import {ReactComponent as Accessorie2} from '../../Assets/Accessories/accessorie2.svg'
import {ReactComponent as Accessorie3} from '../../Assets/Accessories/accessorie3.svg'
import {ReactComponent as CheeksNose1} from '../../Assets/CheeksNose/cheeksNose1.svg'
import {ReactComponent as CheeksNose2} from '../../Assets/CheeksNose/cheeksNose2.svg'
import {ReactComponent as CheeksNose3} from '../../Assets/CheeksNose/cheeksNose3.svg'

const getComponentByName = name => {
    const components = [
        Face1,
        Face2,
        Face3,
        Face4,
        Face5,
        Face6,
        Eyes1,
        Eyes2,
        Mouth1,
        Mouth2,
        Mouth3,
        Mouth4,
        Mouth5,
        Eyebrows1,
        Eyebrows2,
        Eyebrows3,
        Eyebrows4,
        Eyebrows5,
        Body1,
        Background1,
        Accessorie1,
        Accessorie2,
        Accessorie3,
        CheeksNose1,
        CheeksNose2,
        CheeksNose3,
    ]

    return components.filter(component => component.render.name === name).shift();
}

const Canvas = () => {
    const avatar = useAvatarContext()
    const avatarKeys = Object.keys(avatar.traits)

    return (
        <div className="canvas">
            {avatarKeys.map(key => {
                const Svg = getComponentByName(avatar.traits[key].componentName)

                return (
                    <div key={ key } className={ `avatar-trait ` + key }>
                        {Svg && <Svg className={avatar.traits[key].color} />}
                    </div>
                )
            })}
        </div>
    )
}

export default Canvas;
