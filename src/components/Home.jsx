import React from 'react'

const Home = () => {
  return (
   <>
 <div className='w-full h-screen flex justify-center items-center relative'>
  <img className='absolute w-full h-full object-cover z-0' src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
  <div className='bg-black/40 fixed top-0 left-0 w-full h-screen z-10'></div>
  <div className="text-center overlay text-white p-4 z-20 relative">
    <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
      Unlimited movies, TV <br /> shows, and more.
    </h1>
    <p className="text-base md:text-lg mb-2 md:mb-4">
      Watch anywhere. Cancel anytime.
    </p>
    <p className="text-base mb-4">
      Ready to watch? Enter your email to create or restart your membership.
    </p>
    <div className="flex flex-col items-center md:flex-row md:items-center gap-2">
      <input
        type="text"
        className="bg-white p-2 w-full md:w-96"
        placeholder="Email address"
      />
      <button className="bg-red-600 text-white px-4 py-2 w-full md:w-auto">
        Get started
      </button>
    </div>
  </div>
</div>

   </>
  )
}

export default Home