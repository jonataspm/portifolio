import React, { useState } from 'react';
import { MenuDiv, } from './style';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export default function MenuSideBar() {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const opSideBar = () => {
      setIsSideBarOpen(!isSideBarOpen);
    };


    return (
        <MenuDiv>
            <div className='side_menu_bar' onClick={opSideBar}>
                <MenuOutlinedIcon id='toggleButton'/>
            </div>
            <div className={`overlay ${isSideBarOpen ? 'active' : ''}`} onClick={opSideBar}></div>
            <div className={`sideBar ${isSideBarOpen ? 'visible' : 'hidden'}`}>
                
                <span>Menu</span>
                <div>
                    <HomeOutlinedIcon/> <p>Home</p>
                </div>
                <div>
                    <PermIdentityOutlinedIcon/> <p>Introduction</p>
                </div>
                <div>
                    <BusinessCenterOutlinedIcon/> <p>Work Experience</p>
                </div>
                <div>
                    <SchoolOutlinedIcon/> <p>Knowledges</p>
                </div>
                <div>
                    <CodeOutlinedIcon/> <p>Projects</p>
                </div>
                <div>
                    <MailOutlineIcon/> <p>Contact</p>
                </div>   
            </div>

            <div className='side_menu'>
                <HomeOutlinedIcon/>
                <PermIdentityOutlinedIcon/>
                <BusinessCenterOutlinedIcon/>
                <SchoolOutlinedIcon/>
                <CodeOutlinedIcon/>
                <MailOutlineIcon/>
            </div>
        </MenuDiv>
    );
}