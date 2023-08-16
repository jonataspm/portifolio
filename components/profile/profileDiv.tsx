import * as React from 'react';
import { ProfDiv } from './style'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProfileDiv() {
  return (
    <ProfDiv>
        <h2>Jonatas</h2>
        <p>Fullstack Developer</p>
        <img src="https://media.licdn.com/dms/image/D4D03AQF0S8GTV9uTHQ/profile-displayphoto-shrink_200_200/0/1681177109864?e=1697673600&v=beta&t=PP4mHkP2KhumAdq7V10WTW6pvwKabrP_bByUhJpOmgY" alt=""/>
        <p>
            jonataspmpm@gmail.com
            <br/>
            Base in Fortaleza, Brazil
        </p>
        
        <p>© 2023 jonatas. All Rights Reserverd</p>
        <LinkedInIcon/>
        <GitHubIcon/>
        <InstagramIcon/>
        <WhatsAppIcon/>
        
        <button>Contact Me</button>
    </ProfDiv>
    );
}