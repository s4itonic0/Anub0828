import React from 'react'

const Menulinks = [
  {
      id: 1,
      name: "Home",
      link: "/#",
  },
  {
      id: 2,
      name: "Videos",
      link: "/#videos",
  },
  {
      id: 3,
      name: "New Setter",
      link: "/#new setter",
  },
  {
      id: 4,
      name: "Contact",
      link: "/#contact",
  },
  {
    id: 5,
    name: "Teachers",
    link: "/#teachers",
  },
  {
    id: 6,
    name: "Price",
    link: "/#price",
  },
];

const Navbar = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='py-4'>
        <div className='container flex justify-between items-center'>
          {/*logo */}
          <div>
            <a className='text-primary font-bold tracking-widest text-2xl uppercase sm:text-3xl hover:text-secondary duration-200 flex justify-center gap-4' href="#"><img className='width-10 h-10 fill-secondary' src="https://pngimg.com/d/volleyball_PNG28.png" alt="" />VolleyBall</a>
          </div>
          {/*menu */}
          <div className="hidden lg:block">
                    <ul className="flex items-center gap-1">
                        {
                            Menulinks.map((data,index) => (
                                <li key={index}>
                                    <a href={data.link}
                                    className="inline-block px-10 font-semibold text-primary hover:text-secondary duration-200"
                                    >{data.name}</a>
                                </li>
                            ))}
                    </ul>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
