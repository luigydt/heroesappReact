import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroItem } from './HeroItem';

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
    // const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="card-columns animate__animated animate__bounce animate__fadeIn">
            {
                heroes.map(hero => {
                    return (
                        <HeroItem key={hero.id} {...hero} />)
                })
            }
        </div>
    )
}
