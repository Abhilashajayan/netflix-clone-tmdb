import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from "../context/authContext";


const  siginin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const {  login  } = UserAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await login(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
            setError("Invalid Credentials");
        }
    }
  return (
    <>
        <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
        <div className='bg-black/50 fixed top-0 left-0 w-full h-screen'></div>
        <div>
        <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>Sign In</h1>
                            <form onSubmit={handleSubmit}  className='w-full flex flex-col py-4'>
                                <input  onChange={(e) => setEmail(e.target.value)}  className='p-3 my-2 rounded' style={{backgroundColor:'#333333'}} type="email" placeholder='Email' autoComplete='email' />
                                <input onChange={(e) => setPassword(e.target.value)}  className='p-3 my-2  rounded' style={{backgroundColor:'#333333'}} type="password" placeholder='Password' autoComplete='current-password' />
                                <p className="text-red-500 text-xs italic text-center mb-4">{error}</p>
                                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                                <div className='flex justify-between items-center text-sm text-gray-700'>
                                    <p><input className='mr-2 text-gray-500' type="checkbox" />Remember me</p>
                                    <p className='text-gray-500'>Need Help?</p>
                                </div>
                                <p className='py-10'><span className='text-gray-500'>New to Netflix? </span>{" "}
                                <Link to='/Signup'> Sign Up Now</Link> 

                                </p>
                            </form>
                        </div>
                    </div>
                </div>

        </div>
        </div>
    </>
  )
}

export default siginin;