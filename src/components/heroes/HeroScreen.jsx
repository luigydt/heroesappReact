import React from 'react'
import { Redirect, useParams } from 'react-router'

import { getHeroById } from '../../selectors/getHeroById'

export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams();//Hook para los params del router 
    const hero = getHeroById(heroeId);
    if (!hero) {
        return <Redirect to='/' />
    }

    const handleReturn = () => {
        if (history.length <= 2) {
            history.push('/');
        } else {

            history.goBack();
        }
    }
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`../assets/heroes/${heroeId}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail animate__animated animate__fadeInUp"
                />
            </div>
            <div className="col-8">
                <h3 className="">{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter Ego: </b> {hero.alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b> {hero.publisher}
                    </li>
                    <li className="list-group-item">
                        <b>1st Appearance: </b> {hero.first_appearance}
                    </li>
                </ul>
                <h5><b>Characters</b></h5>
                <p>{hero.characters}</p>

                <button
                    className="btn btn-outline-primary"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
