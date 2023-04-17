import { nanoid } from 'nanoid'
import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io"
import { Link } from 'react-router-dom'


function CountryPageItem({ name, flags, population, region, subregion, capital, currencies, languages, timezones, status, borders }) {
    let money 
    for (let key in currencies){
        money = key
        break
    }
    
    let language
    for (let key in languages){
        language = key 
        language = languages[key]   
        break
    }
    const border = borders?.map((item)=>{return <Link key={nanoid()} to={`/${item}`}><button className='borders'>{item}</button></Link>}) 
    
    return (
        <div className='containerr p-5'>
            <Link to='/' className='back'><IoIosArrowRoundBack className='back-icon' /> Back</Link>
            <div className='country-container d-flex justify-content-between'>
                <div className="flag">
                    <img src={flags.png} alt={flags.alt} />
                </div>
                <div className="info">
                    <h2>{name.common}</h2>
                    <div className='my-5 d-flex gap-5 justify-content-between'>
                        <div className="left">                            
                            <p><span className='b-font'>Population:</span>  {population}</p>
                            <p><span className='b-font'>Region:</span> {region}</p>
                            <p><span className='b-font'>Sub Region:</span> {subregion}</p>
                            <p><span className='b-font'>Capital:</span>  {capital}</p>
                        </div>
                        <div className="right">                           
                            <p><span className='b-font'>Timezones:</span> {timezones}</p>
                            <p><span className='b-font'>Status:</span>  {status}</p>
                            <p><span className='b-font'>Currency:</span>  {money}</p>
                            <p><span className='b-font'>language:</span> {language}  </p>
                        </div>                        
                    </div>
                    <div className="borders">
                        Borders Countries: {border || "no border countries"}  
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CountryPageItem