import React from 'react'
import html2canvas from 'html2canvas'
import './menu.css'
import Trait from '../Trait/trait'
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

const downloadAvatar = () => {
    const canvas = document.querySelector('.canvas')

    if (canvas) {
        html2canvas(canvas, {
            onclone: (doc) => {
                const clonedCanvas = doc.querySelector('.canvas')
                clonedCanvas.style.width = '600px'
                clonedCanvas.style.height = '600px'

                const traits = clonedCanvas.getElementsByClassName('avatar-trait')

                for (let i = 0; i < traits.length; i++) {
                    traits[i].style.top = 0
                    traits[i].style.bottom = 0
                    traits[i].style.left = 0
                    traits[i].style.right = 0

                    const svg = traits[i].querySelector('svg')

                    if(svg) {
                        svg.style.height = '600px'
                        svg.style.width = '600px'
                    }
                }
            }
        }).then(finalCanvas => {
            const downloadLink = document.createElement('a');
            downloadLink.download = 'pimp_my_knpeer.png';
            downloadLink.href = finalCanvas.toDataURL('img/png');
            downloadLink.click();
        });
    }
}

const Menu = () => {
    const avatar = useAvatarContext()

    const faces = [Face1, Face2, Face3, Face4, Face5, Face6]
    const eyes = [Eyes1, Eyes2]
    const mouths = [Mouth1, Mouth2, Mouth3, Mouth4, Mouth5]
    const body = [Body1]
    const eyebrows = [Eyebrows1, Eyebrows2, Eyebrows3, Eyebrows4, Eyebrows5]
    const accessories = [Accessorie1, Accessorie2, Accessorie3]
    const beard = []
    const hairs = []
    const background = [Background1]
    const faceColors = ['pink1', 'pink2', 'beige1', 'beige2', 'brown1', 'brown2']
    const hairColors = ['blond', 'ginger', 'red', 'brown', 'black', 'grey']
    const bodyColors = ['red', 'pink', 'yellow', 'green', 'blue', 'black']
    const backgroundColors = ['light-purple', 'light-pink', 'light-yellow', 'light-green', 'light-blue', 'light-black']

    return (
        <div className="menu">
            <Trait
                name="Visages"
                selectedTrait={avatar.traits.face.componentName}
                traits={faces}
                setTrait={avatar.setFace}
                colors={faceColors}
                setColor={avatar.setFaceColor}
                selectedColor={avatar.traits.face.color}
            />
            <Trait
                name="Yeux"
                selectedTrait={avatar.traits.eyes.componentName}
                traits={eyes}
                setTrait={avatar.setEyes}
            />
            <Trait
                name="Bouches"
                selectedTrait={avatar.traits.mouth.componentName}
                traits={mouths}
                setTrait={avatar.setMouth}
            />
            <Trait
                name="Sourcils"
                selectedTrait={avatar.traits.eyebrows.componentName}
                traits={eyebrows}
                setTrait={avatar.setEyebrows}
            />
            <Trait
                name="Cheveux"
                selectedTrait={avatar.traits.hair.componentName}
                traits={hairs}
                setTrait={avatar.setHair}
                colors={hairColors}
                setColor={avatar.setHairColor}
                selectedColor={avatar.traits.hair.color}
            />
            <Trait
                name="Barbes"
                selectedTrait={avatar.traits.beard.componentName}
                traits={beard}
                setTrait={avatar.setBeard}
            />
            <Trait
                name="Corps"
                selectedTrait={avatar.traits.body.componentName}
                traits={body}
                setTrait={avatar.setBody}
                colors={bodyColors}
                setColor={avatar.setBodyColor}
                selectedColor={avatar.traits.body.color}
            />
            <Trait
                name="Accessoires"
                selectedTrait={avatar.traits.accessories.componentName}
                traits={accessories}
                setTrait={avatar.setAccessories}
            />
            <Trait
                name="Fond"
                selectedTrait={avatar.traits.background.componentName}
                traits={background}
                setTrait={avatar.setBackground}
                colors={backgroundColors}
                setColor={avatar.setBackgroundColor}
                selectedColor={avatar.traits.background.color}
            />

            <button
                className={ `download ${avatar.isEmpty ? 'disabled' : ''}`}
                disabled={ avatar.isEmpty }
                onClick={ downloadAvatar }
            >
                <img className="save" src="/Images/Assets/save.svg" />
                Télécharger mon avatar
            </button>
        </div>
    )
}

export default Menu;
