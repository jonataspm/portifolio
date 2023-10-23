import React, { MouseEventHandler, useState } from 'react';
import { MenuDiv, } from './style';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


type MenuSideBarProps = {
    innerRefs: {
      homeRef: React.RefObject<HTMLDivElement>;
      introductionRef: React.RefObject<HTMLDivElement>;
      workRef: React.RefObject<HTMLDivElement>;
      knowledgesRef: React.RefObject<HTMLDivElement>;
      projectsRef: React.RefObject<HTMLDivElement>;
      contactRef: React.RefObject<HTMLDivElement>;
    };
  };

export default function MenuSideBar({ innerRefs }: MenuSideBarProps) {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const opSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen);
    };

    function scrollSmoothHandler(innerRef: React.RefObject<HTMLElement>) {
        innerRef.current?.scrollIntoView({ behavior: 'smooth' });
      };

    return (
        <MenuDiv>
            <div className='side_menu_bar' onClick={opSideBar}>
                <MenuOutlinedIcon id='toggleButton' />
            </div>
            <div className={`overlay ${isSideBarOpen ? 'active' : ''}`} onClick={opSideBar}></div>
            <div className={`sideBar ${isSideBarOpen ? 'visible' : 'hidden'}`}>

                <span>Menu</span>
                <div onClick={() => scrollSmoothHandler(innerRefs.homeRef)}>
                    <HomeOutlinedIcon /> <p>Home</p>
                </div>
                <div onClick={() => scrollSmoothHandler(innerRefs.introductionRef)}>
                    <PermIdentityOutlinedIcon /> <p>Introduction</p>
                </div>
                <div onClick={() => scrollSmoothHandler(innerRefs.workRef)}>
                    <BusinessCenterOutlinedIcon /> <p>Work Experience</p>
                </div>
                <div onClick={() => scrollSmoothHandler(innerRefs.knowledgesRef)}>
                    <SchoolOutlinedIcon /> <p>Knowledges</p>
                </div>
                <div onClick={() => scrollSmoothHandler(innerRefs.projectsRef)}>
                    <CodeOutlinedIcon /> <p>Projects</p>
                </div>
                <div onClick={() => scrollSmoothHandler(innerRefs.contactRef)}>
                    <MailOutlineIcon /> <p>Contact</p>
                </div>
            </div>

            <div className='side_menu'>
                <div onClick={() => scrollSmoothHandler(innerRefs.homeRef)}>
                    <HomeOutlinedIcon />
                </div>
                <div onClick={() => scrollSmoothHandler(innerRefs.introductionRef)}>
                    <PermIdentityOutlinedIcon />
                </div>
                <div onClick={() => scrollSmoothHandler(innerRefs.workRef)}>
                    <BusinessCenterOutlinedIcon />
                </div>
                <div onClick={() => scrollSmoothHandler(innerRefs.knowledgesRef)}>
                    <SchoolOutlinedIcon />
                </div>
                <div onClick={() => scrollSmoothHandler(innerRefs.projectsRef)}>
                    <CodeOutlinedIcon />
                </div>
                <div onClick={() => scrollSmoothHandler(innerRefs.contactRef)}>
                    <MailOutlineIcon />
                </div>
            </div>
        </MenuDiv>
    );
}