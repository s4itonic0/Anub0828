import React from 'react'

const Burtgel = () => {
  return (
    <div className='bg-white duration-200 relative z-40'>
      <div className='py-4'>
        <div className='container flex items-center justify-between'>
          {/*text */}
          <div className='flex items-center gap-4'>
            <h1 className='text-primary font-bold tracking-widest text-3xl uppercase sm:text-6xl'>Sign up in here</h1>
          </div>
          {/*input shits */}
          <div className='relative group hidden sm:block flex-col items-center justify-center'>
            <input className='border text-xl text-gray-600 group-hover:text-primary duration-200' type="text" placeholder="First Name" id="fname"/>
            <input className='border text-xl text-gray-600 group-hover:text-primary duration-200' type="text" placeholder="Second Name" id="sname" />
            <input className='border text-xl text-gray-600 group-hover:text-primary duration-200' type="text" placeholder="G-mail" id="gmail" />
            <button className='border'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Burtgel
