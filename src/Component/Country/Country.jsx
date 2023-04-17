import { nanoid } from 'nanoid'
import React, { useLayoutEffect, useState } from 'react'
import Form from '../Form/Form'
import CountryItem from './CountryItem'
import { useNavigate } from 'react-router-dom'

function Country() {
  const [country, setCountry] = useState([])
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(15)
  const [region, setRegion] = useState("")
  const navigate = useNavigate()

  useLayoutEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => {
      if (response.status === 404) {
        navigate("/404")
      }
      else {
        return response.json()
      }})
      .then(data => { setCountry(data) 
      })
  }, [])

  const filtered = country.filter(c => c.name.common.toLowerCase().startsWith(search.toLocaleLowerCase()) && c.region?.toLowerCase().startsWith(region.toLowerCase()))

  return (
    <div className='py-5'>
      <div className='containerr py-3 text-center d-flex flex-wrap gap-4 justify-content-between'>
        <Form search={search} setSearch={setSearch} setRegion={setRegion} />
        {filtered.sort((a,b)=>a.name.common.localeCompare(b.name.common)).slice(0, page).map((item) => {
          return <CountryItem key={nanoid()} {...item} />;
        })}

      </div>

      <div className='containerr d-flex justify-content-center'>
        <button className='more' onClick={()=>{setPage(page+15)}}>More...</button>
      </div>

    </div>

  )
}

export default Country




