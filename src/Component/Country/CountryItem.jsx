import React from 'react'
import { Link } from 'react-router-dom'
import "./CountryItem.css"

function CountryItem({ name, capital, population, flags, region, cca3 }) {
    return (
        <div className='box-item'>
            <Link to={`/${cca3}`}>
                <img src={flags.png} alt={flags.alt} />
                <h3>{name.common}</h3>
                <p>{population}</p>
                <p>{region}</p>
                <p>{capital}</p>
            </Link>

        </div>
    )
}

export default CountryItem