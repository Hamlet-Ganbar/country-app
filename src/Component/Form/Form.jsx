import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './Form.css'


function Form({search, setSearch, setRegion}) {

  const searchHandler = (e) => {
    setSearch(e.target.value)
  }

  return (
    <form className='containerr py-4 d-flex align-items-center justify-content-between align' >
      <div className='search p-2'><AiOutlineSearch /><input value={search} onChange={searchHandler} type="search" placeholder='search country' /></div>
      <div>
        <select className='p-2 search' onChange={(e)=>{setRegion(e.target.value)}}>
          <option value="" hidden>Filter by Region</option>
          <option value="">All</option>
          <option value="Europe">Avropa</option>
          <option value="Asia">Asiya</option>
          <option value="Americas">Amerika</option>
          <option value="Africa">Afrika</option>
          <option value="Oceania">Okeaniya</option>
        </select>
      </div>
    </form>
  )
}

export default Form