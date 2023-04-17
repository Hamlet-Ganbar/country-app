import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {nanoid} from "nanoid"
import CountryPageItem from './CountryPageItem'

function CountryPage() {
    const [country, setCountry] = useState([])
    const params = useParams()
    const navigate =useNavigate()

    useEffect(() => {
      fetch(`https://restcountries.com/v3.1/alpha/${params.id}`)
        .then(response => {
          if (response.status === 404) {
            navigate("/404")
          }
          else {
            return response.json()
          }
        })
        .then(data => {setCountry(data)})
    }, [params, navigate])
    
  return (
    <div>
        {country.map((item)=>{
            return <CountryPageItem key={nanoid()} {...item}/>
        })}
    </div>
  )
}

export default CountryPage