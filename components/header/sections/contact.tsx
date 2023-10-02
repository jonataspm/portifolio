import { Button, TextField, colors } from '@mui/material';
import MuiPhoneNumber from 'material-ui-phone-number-2';
import React, { useState } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddLinkIcon from '@mui/icons-material/AddLink';

export const ContactSection = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');

    const handlePhoneNumberChange = (value: any) => {
        setPhoneNumber(value);
    };

    return (
        <section>
            <h1>Contact</h1>
            <form className='contact-form'>
                <div className='contact-row'>
                    <div className='contact contact-name'>
                        <label htmlFor="name">FULL NAME</label>
                        <input type="text" id='name' name='name' placeholder='Your full name' required />
                    </div>

                    <div className='contact contact-email'>
                        <label htmlFor="email">MAIL </label>
                        <input type="email" id='email' name='email' placeholder='Your email address' required />
                    </div>
                </div>

                <div className='contact-row'>
                    <div className='contact contact-phonenumber'>
                        <div className='contact-row'>
                            <label htmlFor="phonenumber">PHONE</label> <span>(optional)</span>
                        </div>
                        <MuiPhoneNumber
                            defaultCountry={'br'}
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            fullWidth
                            name="phonenumber"
                            id='phonenumber'
                            inputClass='phoneinput'
                        />
                    </div>
                    <div className='contact contact-subject'>
                        <label htmlFor="subject">SUBJECT </label>
                        <select name="subject" id="subject">
                            <option hidden >Select a subject</option>
                            <option value="0">Interview</option>
                            <option value="1">Propposal</option>
                            <option value="2">Other</option>
                        </select>
                    </div>
                </div>

                <div className='contact contact-mensage'>
                    <label htmlFor="mensage">MENSAGE</label>
                    <input aria-colcount={50} type="text" id="myfile" name="myfile" placeholder='Write your mensage here...' />
                </div>

                <a className='contact contact-file'>
                    <AddLinkIcon sx={{ color: "white" }} />
                    <label htmlFor="myfile"> ADD AN ATTACHMENT</label>
                    <input type="file" id="myfile" name="myfile" placeholder='Attachment here' />
                </a>

            </form>
        </section>
    );
}
