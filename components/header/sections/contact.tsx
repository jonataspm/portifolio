import { Button, TextField, colors } from '@mui/material';
import MuiPhoneNumber from 'material-ui-phone-number-2';
import React, { useState } from 'react';

export const ContactSection = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');

    const handlePhoneNumberChange = (value: any) => {
        setPhoneNumber(value);
    };

    return (
        <section>
            <h1>Contact</h1>
            <form >

                <div className='contact-name'>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id='name' name='name' placeholder='Your full name' required />
                </div>

                <div className='contact-email'>
                    <label htmlFor="email">Email </label>
                    <input type="email" id='email' name='email' placeholder='Your email address' required />
                </div>

                <div className='contact-phonenumber'>
                    <label htmlFor="phonenumber">Phone</label> <span>(optional)</span>
                    <MuiPhoneNumber
                        defaultCountry={'br'}
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        fullWidth
                        name="phonenumber"
                        id='phonenumber'
                    />
                </div>

                <div className='contact-mensage'>
                    <label htmlFor="mensage">Mensage</label>
                    <input type="text" id='mensage' name='mensage' placeholder='Write your mensage here...' required/>
                </div>

                <div className='contact-mensage'>
                    <input type="file" id="myfile" name="myfile" placeholder='Attachment here'/>
                    
                </div>
                
            </form>
        </section>
    );
}
