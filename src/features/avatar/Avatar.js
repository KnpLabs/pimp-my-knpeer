import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { allTheTraits, selectAvatar } from "./avatarSlice";
import './canvas.css'

export function Avatar() {

    const getComponentByName = name => {
        return allTheTraits.filter(allTheTrait => allTheTrait.render.name === name).shift();
    }

    // on récupere le state de l'avatar afin de l'afficher sur le canvas
    const avatar = useSelector(selectAvatar)
    
    const traits = Object.entries(avatar)
    
    const traitProperties = Object.entries(traits[0][1])

    return (
        <div className="canvas">
            {traitProperties.map((trait, traitIndex) => {
                console.log(trait)
                {trait.map((properties, propertiesIndex) => {
                    if (undefined === properties) {
                        return;
                    }
                    if (typeof properties == 'object') {

                        console.log(properties.shape)
                        const Svg = getComponentByName(properties.shape)
                        return (
                            <div key={propertiesIndex} className={`avatar-trait` + propertiesIndex}>
                                {Svg && <Svg className={properties.color} />}
                            </div>
                        )
                    }

                    return (
                        <div></div>
                    )
                })}
            })}
        </div>
    )
}
