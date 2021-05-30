import React, { useMemo } from 'react';
import queryString from 'query-string'
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroItem } from '../heroes/HeroItem';
import { useLocation } from 'react-router';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [values, handleInputChange, reset] = useForm({ inputHero: q });
    const { inputHero } = values;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(inputHero);
        reset();

        history.push(`?q=${inputHero}`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr></hr>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr></hr>
                    <form onSubmit={handleSearch}>
                        <input
                            className="form-control"
                            type="text"
                            name="inputHero"
                            autoComplete="off"
                            placeholder="Find your hero"
                            onChange={handleInputChange}
                            value={inputHero}
                        ></input>
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr></hr>
                    {
                        heroesFiltered.map(hero => {
                            return (
                                <HeroItem
                                    key={hero.id}
                                    {...hero}
                                />)
                        })
                    }
                </div>
            </div>
        </div>
    )
}
