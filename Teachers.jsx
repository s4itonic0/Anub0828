import React from 'react'
import { CgProfile } from "react-icons/cg";

const TeachersData = [
    {
        id:1,
        image: <CgProfile className='text-4xl md:text-5xl text-primary'/>,
        title:"Name:",
        description:"Experience:",
    },
    {
        id:2,
        image: <CgProfile className='text-4xl md:text-5xl text-primary'/>,
        title:"Name:",
        description:"Experience:",
    },
    {
        id:3,
        image: <CgProfile className='text-4xl md:text-5xl text-primary'/>,
        title:"Name:",
        description:"Experience:",
    },
    {
        id:4,
        image: <CgProfile className='text-4xl md:text-5xl text-primary'/>,
        title:"Name:",
        description:"Experience:",
    },
];

const Teachers = () => {
  return (
    <div>
        <div className="container my-14 md:my-20 ">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                {TeachersData.map((data)=>(
                    <div className='flex flex-col items-start sm:flex-row gap-4 text-primary hover:text-secondary duration-200'>
                        {data.image}
                        <div>
                            <h1 className='lg:text-xl font-bold '>{data.title}</h1>
                            <h1 className='text-gray-400 text-sm'>{data.description}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Teachers
