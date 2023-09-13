import * as React from 'react';
import { ProfDiv } from './style';
import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function ProfileDiv() {

    const [DarkLight, setDarkLight] = React.useState(true);

    const toggleMode = () => {
        setDarkLight(!DarkLight);
        if (DarkLight) {
          document.documentElement.style.setProperty('--primary-color', '#000');
          document.documentElement.style.setProperty('--background-color', '#fff');
        } else {
          document.documentElement.style.setProperty('--primary-color', '#fff');
          document.documentElement.style.setProperty('--background-color', '#000');
        }
      };

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
            <img className='profilepic' src="./eu1s.jpg" alt="" />

            <p>Jonataspmpm@gmail.com</p>
            <p>Base in Fortaleza, BR</p>

            <span>© 2023 Jonatas. All Rights Reserverd</span>

            <div className='icons'>

                <a href="https://www.linkedin.com/in/jonatasp/">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/jonataspm">
                    <GitHubIcon />
                </a>
                <a href="https://www.instagram.com/jonatasad/">
                    <InstagramIcon />
                </a>
                <a href="https://wa.me/558981078108">
                    <WhatsAppIcon />
                </a>

            </div>

         
            <button className='btnMode' onClick={toggleMode}>
                {DarkLight ? 'Light Mode' : 'Dark Mode'}
            </button>
       
            <button className='btn'>
                <MailOutlineIcon />
                <b>Contact Me</b>
            </button>
        </ProfDiv>
    );
}