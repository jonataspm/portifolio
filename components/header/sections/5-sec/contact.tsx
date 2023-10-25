import MuiPhoneNumber from 'material-ui-phone-number-2';
import React, { forwardRef, useState } from 'react';
import AddLinkIcon from '@mui/icons-material/AddLink';
import { FifthSectionComp } from './style';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css'
import { TitleSection } from '../../../title-header';
import { SecondTitle } from '../../../styleds/styleds';

export const ContactSection = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');

    const handlePhoneNumberChange = (value: any) => {
        setPhoneNumber(value);
    };

    return (
        <FifthSectionComp>
            <TitleSection Name='Contact'/>
            <SecondTitle>Did you liked? <b>Call me.</b></SecondTitle>
            <form className='contact-form'>
                    <div className='contact contact-name'>
                        <label htmlFor="name">FULL NAME<sup>*</sup></label>
                        <input type="text" id='name' name='name' placeholder='Your full name' required />
                    </div>

                    <div className='contact contact-email'>
                        <label htmlFor="email">MAIL<sup>*</sup> </label>
                        <input type="email" id='email' name='email' placeholder='Your email address' required />
                    </div>

                    <div className='contact contact-phonenumber'>
                        <div className='contact-row'>
                            <label htmlFor="phonenumber">PHONE</label> <span>(optional)</span>
                        </div>
                        <PhoneInput   
                            country={'br'} 
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            inputClass='phoneinp'
                        />
                    </div>
                    <div className='contact contact-subject'>
                        <label htmlFor="subject">SUBJECT<sup>*</sup></label>
                        <select name="subject" id="subject">
                            <option hidden >Select a subject</option>
                            <option value="0">Interview</option>
                            <option value="1">Propposal</option>
                            <option value="2">Other</option>
                        </select>
                    </div>
              

                <div className='contact contact-message'>
                    <label htmlFor="message">MESSAGE<sup>*</sup></label>
                    <textarea  id="message" name="message" placeholder='Write your message here...' />
                </div>

                <a className='contact contact-file'>
                    <AddLinkIcon sx={{ color: "white" }} />
                    <label htmlFor="myfile"> ADD AN ATTACHMENT</label>
                    <input type="file" id="myfile" name="myfile" placeholder='Attachment here' />
                </a>    

                <input type="submit" name="" id="" />
            </form>
        </FifthSectionComp>
    );
};
