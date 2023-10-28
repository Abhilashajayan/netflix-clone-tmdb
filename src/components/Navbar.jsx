import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



const  Navbar = ()=> {
  return (
    <div className='flex items-center justify-between bg-black/10 p-5 z-[100] w-full absolute'>
      <Link to='/'> 
       <img src="https://rb.gy/ulxxee" className='ml-10' width={150} height={150} alt="" />
      </Link>
    </div>
  )
}

export default Navbar