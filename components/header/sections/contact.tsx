import { Button, TextField, colors } from '@mui/material';
import MuiPhoneNumber from 'material-ui-phone-number-2';
import React, { useState } from 'react';

export const ContactSection = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');

    const handlePhoneNumberChange = (value: any) => {
      setPhoneNumber(value);
    };
    
    const inputProps = {
        step: 300,
        color: "red" 
      };

  return (
    <section>
         <h1>Contact</h1>
        <form action="">
            <TextField id="outlined-basic" label="Full Name" variant="outlined" color='secondary'/>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <MuiPhoneNumber
                defaultCountry={'br'}
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                variant="outlined"
                fullWidth
                label="Phone Number"
                name="phoneNumber"
            />
            <TextField id="outlined-basic" label="Description" variant="outlined" />
        </form>
    </section>
  );
}
