import React from 'react'
import { openInNewTab, userData } from '../../Userdata'

const Projects = () => {
    
  return (
    <div className="bg-white " id='Projects'>
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Projects</h2>
    </div>


    <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
      {userData.projects.map((item,key)=>(

      <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6" key={key}>
        <span href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src={item.imagelink} loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
        </span>

        <div className="flex flex-col gap-2">

          <h2 className="text-xl font-bold text-gray-800">
            <span href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{item.name}</span>
          </h2>

          <p className="text-gray-500">{item.desc}</p>

          <div>
            <span href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700 cursor-pointer" onClick={()=>openInNewTab(item.link)}>Read more</span>
          </div>
        </div>
      </div>
      ))}
   

      

   
    </div>
  </div>
</div>
  )
}

export default Projects