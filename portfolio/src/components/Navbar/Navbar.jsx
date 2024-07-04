import * as React from 'react';
import { userData } from '../../Userdata';
import logo from "../../icons/logosvg.svg"
import handburger from "../../icons/breadcrumb.svg"
import { Link } from 'react-scroll';
function Navbar() {


  return (
    <div className="bg-white lg:pb-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <header className="flex items-center justify-between py-4 md:py-8">
      <Link to='About Me' className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
        <img className='w-10 h-10' src={logo} alt="logo" />
        {userData?.LogoName}
      </Link>
   
      <nav className="hidden gap-12 lg:flex">
        {userData.LeftsideItems.map(item=>(
          <Link to={item} smooth={true} duration={500} className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 cursor-pointer">{item}</Link>
        ))}
        {/* <span  className="inline-flex items-center gap-1 text-lg font-semibold text-indigo-500">
          Features
        </span>
        <span className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Pricing</span>
        <span  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">About</span> */}
      </nav>
      
      <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
       <img className='w-7 h-7' src={handburger} alt="handburger" />
        Menu
      </button>
    </header>
    
  </div>
</div>
  );
}
export default Navbar;
