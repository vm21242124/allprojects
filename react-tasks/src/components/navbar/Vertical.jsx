
import { VerticalNav, VerticalNavItem, VerticalNavItems } from "./Navbar.styles";



export default function Vertical() {
    const items=['home' , 'about', 'contact'];
  return (
   <VerticalNav >
    <VerticalNavItems>
        {items.map((item,key)=>(
            <VerticalNavItem key={key}>{item}</VerticalNavItem>
        ))}
    </VerticalNavItems>
   </VerticalNav>
  )
}
