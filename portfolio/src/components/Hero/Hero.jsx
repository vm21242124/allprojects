import React from 'react'
import { openInNewTab, userData } from '../../Userdata'

const Hero = () => {
    const handleDownload = (e) => {
        e.preventDefault();
        const downloadUrl = process.env.PUBLIC_URL + '/vinod_mali_resume.pdf';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'vinod_mali_resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    const handleEmail = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent('Ready to Hire');
        const body = encodeURIComponent(`Hi ${userData.name},\n Hope you are doing well, we wan't hire you. \n Thanks`);
      
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    };

  return (
    <div className="bg-white" id='About Me'>
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <section className="flex flex-col items-center">
        <div className="flex max-w-xl flex-col items-center pb-16 pt-8 text-center lg:pb-48 lg:pt-32">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">I'm {userData.name}...</h1>
          <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">{userData.jobTitle} @ {userData.companyName}</p>
          <p className="mb-4 font-semibold text-indigo-300 md:mb-6 md:text-sm xl:text-sm"> {userData.profileSummery}.</p>

  
          <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
            <span className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base cursor-pointer" onClick={handleDownload}>Download Resume</span>
  
            <span className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base cursor-pointer" onClick={handleEmail}> Hire me</span>
          </div>
          <div className="flex p-6 items-center justify-center gap-4 lg:justify-start">
          <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">Social</span>
          <span className="h-px w-12 bg-gray-200"></span>
  
          <div className="flex gap-4">
            <span target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600" onClick={()=>openInNewTab(userData.github)}>
              <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </span>
  
            <span target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600" onClick={()=>openInNewTab(userData.github)}>
              <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </span>
          </div>
        </div>
        </div>
  
      </section>
    </div>
  </div>
  )
}

export default Hero