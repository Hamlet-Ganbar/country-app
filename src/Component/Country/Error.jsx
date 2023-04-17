import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io"


function Error() {
  return (
    <div className='containerr'>
        <h2>Page not Found</h2>
        <Link to='/' className='back'><IoIosArrowRoundBack className='back-icon' /> Back</Link>
    </div>
  )
}

export default Error