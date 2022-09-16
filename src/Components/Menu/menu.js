import React from 'react'
import html2canvas from 'html2canvas'
import './menu.css'
import Trait from '../Trait/trait'
import { useAvatarContext } from '../Context/avatarContext'

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

    return (
        <div className="menu">
            <Trait
                name="Visages"
                componentName={Object.keys(avatar.traits).find(key => avatar.traits[key] === avatar.traits.face)}
                selectedTrait={avatar.getters.face.componentName}
                traits={avatar.traits.face}
                setTrait={avatar.setters.face}
                colors={avatar.traits.faceColors}
                setColor={avatar.setters.faceColor}
                selectedColor={avatar.getters.face.color}
            />
            <Trait
                name="Yeux"
                componentName={Object.keys(avatar.traits).find(key => avatar.traits[key] === avatar.traits.eyes)}
                selectedTrait={avatar.getters.eyes.componentName}
                traits={avatar.traits.eyes}
                setTrait={avatar.setters.eyes}
            />
            <Trait
                name="Bouches"
                componentName={Object.keys(avatar.traits).find(key => avatar.traits[key] === avatar.traits.mouth)}
                selectedTrait={avatar.getters.mouth.componentName}
                traits={avatar.traits.mouth}
                setTrait={avatar.setters.mouth}
            />
            <Trait
                name="Sourcils"
                componentName={Object.keys(avatar.traits).find(key => avatar.traits[key] === avatar.traits.eyebrows)}
                selectedTrait={avatar.getters.eyebrows.componentName}
                traits={avatar.traits.eyebrows}
                setTrait={avatar.setters.eyebrows}
            />
            <Trait
                name="Cheveux"
                componentName={Object.keys(avatar.traits).find(key => avatar.traits[key] === avatar.traits.hair)}
                selectedTrait={avatar.getters.hair.componentName}
                traits={avatar.traits.hair}
                setTrait={avatar.setters.hair}
                colors={avatar.traits.hairColors}
                setColor={avatar.setters.hairColor}
                selectedColor={avatar.getters.hair.color}
            />
            <Trait
                name="Barbes"
                componentName={Object.keys(avatar.traits).find(key => avatar.traits[key] === avatar.traits.beard)}
                selectedTrait={avatar.getters.beard.componentName}
                traits={avatar.traits.beard}
                setTrait={avatar.setters.beard}
            />
            <Trait
                name="Corps"
                componentName={Object.keys(avatar.traits).find(key => avatar.traits[key] === avatar.traits.body)}
                selectedTrait={avatar.getters.body.componentName}
                traits={avatar.traits.body}
                setTrait={avatar.setters.body}
                colors={avatar.traits.bodyColors}
                setColor={avatar.setters.bodyColor}
                selectedColor={avatar.getters.body.color}
            />
            <Trait
                name="Accessoires"
                componentName={Object.keys(avatar.traits).find(key => avatar.traits[key] === avatar.traits.accessories)}
                selectedTrait={avatar.getters.accessories.componentName}
                traits={avatar.traits.accessories}
                setTrait={avatar.setters.accessories}
            />
            <Trait
                name="Fond"
                componentName={Object.keys(avatar.traits).find(key => avatar.traits[key] === avatar.traits.background)}
                selectedTrait={avatar.getters.background.componentName}
                traits={avatar.traits.background}
                setTrait={avatar.setters.background}
                colors={avatar.traits.backgroundColors}
                setColor={avatar.setters.backgroundColor}
                selectedColor={avatar.getters.background.color}
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
