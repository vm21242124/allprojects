
import { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Vertical from './components/navbar/Vertical';
import Main from './components/mainsection/Main';

export const ContextProvider = createContext()
function App() {
  const [ openVerticalMenu,setOpenVerticalMenu ]=useState(false);
  const contextValue={
    openVerticalMenu,
    setOpenVerticalMenu
  };
  
  return (
    <ContextProvider.Provider value={contextValue}>
    <Navbar/>
    {openVerticalMenu && <Vertical/>}
    <Main/>
    </ContextProvider.Provider>
  )
}

export default App
