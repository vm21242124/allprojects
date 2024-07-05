import { useContext } from "react";
import { NavbarHandburger, NavbarItem, NavbarItemContainer, NavbarLogoContainer, Navbarcontainer } from "./Navbar.styles"
import { MdOutlineMenuOpen,MdClose } from "react-icons/md";
import { IoRocket } from "react-icons/io5";
import { ContextProvider } from "../../App";

const Navbar = () => {
  const items=['home' , 'about', 'contact'];
  const {
    openVerticalMenu,
    setOpenVerticalMenu
  } = useContext(ContextProvider)
  return (
   <Navbarcontainer>
    <NavbarLogoContainer>
      <IoRocket style={{ fontSize:'2rem', cursor:"pointer" }}/>
    </NavbarLogoContainer>
    <NavbarItemContainer>
      {items.map((item,key)=>(
        <NavbarItem key={key}> {item} </NavbarItem>
      ))}
    </NavbarItemContainer>
    <NavbarHandburger>
      {openVerticalMenu ? 
      <MdClose style={{ fontSize:'2rem', cursor:"pointer" }} onClick={()=>setOpenVerticalMenu(false)} />
      :
      <MdOutlineMenuOpen style={{ fontSize:'2rem', cursor:"pointer" }} onClick={()=>setOpenVerticalMenu(true)}/>
      }
    </NavbarHandburger>
   </Navbarcontainer>
  )
}

export default Navbar