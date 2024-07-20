import styled from "styled-components";
import PrimaryButton from "../common/PrimaryButton";
import { ICONS } from "../common/Icons";
import { COLORS } from "../common/Colors";
import { useNavigate } from "react-router-dom";

const HeroSection=styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:60px 0px;
`;
const HeroHeading=styled.span`
    font-weight: 900;
    font-size: 2.5rem;
    color:${COLORS.DEFAUTHEADINGCOLOR};
    padding: 2rem;
`;
const Herospan=styled.span`
padding:2rem;
`;

const HeroButtonGroup=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
`;

export default function MainHero() {
    const nav = useNavigate();
  return (
    <HeroSection>
        <HeroHeading>Doctor near me</HeroHeading>
        <Herospan>Intruducing doctor near me which is web app will used to create contact with your doctor</Herospan>
        <HeroButtonGroup>
            <PrimaryButton handleClick={()=>nav("/patient")} text="For patient" icon={ICONS.RIGHTARROW}/>
            <PrimaryButton handleClick={()=>nav("/doctor")} text="For doctor" icon={ICONS.RIGHTARROW}/>
        </HeroButtonGroup>
    </HeroSection>
  )
}
