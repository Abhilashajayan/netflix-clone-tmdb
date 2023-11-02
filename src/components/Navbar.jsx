import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/authContext'



const  Navbar = ()=> {
  const {user, logout} = UserAuth()
  return (
    <div className='flex items-center justify-between bg-black/10 p-5 z-[100] w-full absolute'>
      <Link to='/'> 
       <img src="https://rb.gy/ulxxee" className='ml-10' width={150} height={150} alt="" />
      </Link>
      {user?.email ? <div>
          <Link to='/account'>
            <button className='text-white pr-4'>{user?.email}</button>
          </Link>
            <button onClick={logout} className='bg-red-600 px-6 py-2 rounded cursor-pointer'>Logout</button>
        </div> : <div>
          <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link to='signup'>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button>
          </Link>
        </div> }
    </div>
  )
}

export default Navbar;