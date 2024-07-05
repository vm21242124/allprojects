import styled from 'styled-components'
import { Breakpoints } from '../../common/breakpoint';

export const Navbarcontainer= styled.header`
    display: flex;
    height: 60px;
    justify-content: space-between;
   padding-left: 2rem;
   padding-right: 2rem;
    align-items:center;
    background-color: #363636;
    color: #E8175D;
`;
export const NavbarLogoContainer =styled.div`
    width: 70px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const NavbarLogoImage = styled.img`
    width: 100%;
    height: 100%;
`;
export const NavbarItemContainer = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    @media (max-width:${Breakpoints.tablet}) {
        display: none;
    }
`;
export const NavbarItem =styled.span`
    text-transform: capitalize;
`;
export const NavbarHandburger = styled.div`
    display: none;
    @media (max-width:${Breakpoints.tablet}) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 100%;
    }
`;
export const VerticalNav= styled.div`
    display: none;
    @media (max-width:${Breakpoints.tablet}) {
        width: 100%;
        height: 100vh;
        background-color: #474747;
        opacity: 70%;
        display: block;
    }
`;
export const VerticalNavItems=styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #363636;
    
`;
export const VerticalNavItem=styled.div`
    color: white;
    padding: 1rem;
    text-transform: capitalize;
    cursor: pointer;
    border-bottom: 1px solid white;
`;