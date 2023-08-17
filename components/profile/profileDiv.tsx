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
                <h2>Jonatas</h2>
            </div>
            <div className='title'>
                <p>Fullstack Developer</p>
            </div>
      </div>
        <img src="https://media.licdn.com/dms/image/D4D03AQF0S8GTV9uTHQ/profile-displayphoto-shrink_200_200/0/1681177109864?e=1697673600&v=beta&t=PP4mHkP2KhumAdq7V10WTW6pvwKabrP_bByUhJpOmgY" alt=""/>
       
  
            <p>jonataspmpm@gmail.com</p>
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