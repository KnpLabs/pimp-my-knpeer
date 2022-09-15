import React from 'react'

import { accessoriesList, background, backgroundColors, bodyColors, eyeBrowsList, eyesList, faceColors, facesList, hairColors, hairList, mouthsList } from '../avatar/avatarSlice';
import { Trait } from '../trait/trait';
import './menu.css'

export function Menu() {

    return (
        <div className="menu">
            <Trait name="Visages" colors={faceColors} traits={facesList} />
            <Trait name="Yeux" traits={eyesList} />
            <Trait name="Bouches" traits={mouthsList} />
            <Trait name="Sourcils" traits={eyeBrowsList} />
            <Trait name="Cheveux" colors={hairColors} traits={hairList} />
            <Trait name="Corps" colors={bodyColors} traits={hairList} />
            <Trait name="Accessoires" traits={accessoriesList} />
            <Trait name="Fond" colors={backgroundColors} traits={background} />
        </div>
    )
}
