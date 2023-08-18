import * as React from 'react';
import { ProfDiv } from './style'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProfileDiv() {
  return (
    <ProfDiv>
        <div className='profileName'>
            <div className='name'>
                <h1>Jonatas</h1>
            </div>
            <div className='title'>
                <p>Fullstack Developer</p>
            </div>
      </div>
        <img src="./eu1s.jpg" alt="" />
         
            <p>Jonataspmpm@gmail.com</p>
            <p>Base in Fortaleza, BR</p>        
        
        <span>© 2023 Jonatas. All Rights Reserverd</span>

        <div className='icons'>
            <LinkedInIcon />
            <GitHubIcon/>
            <InstagramIcon/>
            <WhatsAppIcon/>
        </div>
        
        <button><b>Contact Me</b></button>
    </ProfDiv>
    );
}