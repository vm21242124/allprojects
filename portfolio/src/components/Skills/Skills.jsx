import React from 'react'
import { userData } from '../../Userdata'

const Skills = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12" id='Skills'>
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mb-10 md:mb-16">
    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">My Skills</h2>
    </div>


    <div className="grid gap-12 sm:grid-cols-4 xl:grid-cols-5 xl:gap-16">
        {userData.skills.map((item,key)=>(

            <div key={key} className="flex flex-col items-center">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <img className='w-9 h-9' src={`${process.env.PUBLIC_URL}/icons/${item.name}.png`} alt="skill" />
                </div>

                <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">{item.name}</h3>
            </div>
        ))}
    </div>
  </div>
</div>
  )
}

export default Skills