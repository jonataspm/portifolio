import { colors } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

export const FifthSectionComp = styled.section`

.contact-form{

  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 20px;
  box-sizing: border-box;
  width: 100%;
  margin: 10px 0px;

  sup{
    color: red;
  }

  input,textarea,select{
    padding: 10px 0;
    font-size: large;
    
    outline: 0;
    background: none;
    border: none;
    border-bottom: 1px solid var(--secondary-color) ;

    resize: none;

    &:focus{
      border-bottom: 1px solid var(--third-color) ; 
    }
  }

  input[type='file'] {
    display: none;
  }
  
  select > option{
    color: var(--primary-color);
    background: var(--background-color);
  }

  option:hover{
      background: var(--third-color);
    }

  .contact{
    display: flex;
    flex-direction: column;
  }

  .contact-message{
    grid-column: 1 / 3;
  }

  .contact-file{
    flex-direction: row;
    align-items: center;
    
    label{padding-left:10px;cursor: pointer;};
    svg{cursor: pointer;}
  }

  .phonenumbercs{
    border: none;
    height: auto;
    color: var(--primary-color);
  }

  .css-l4u8b9-MuiInputBase-root-MuiInput-root:after{
    border-bottom: none;
  }

  .special-label{
    display: none;
  }
  .phoneinp{
    padding-left: 50px;
    border-radius: 0px;
    color:var(--primary-color);
  }
  .react-tel-input .form-control:focus {
    background-color: none;
    background: none;
    border-color: none;
    outline: 0;
    box-shadow: none;
}

  input[type='submit']{
    border: 1px solid var(--third-color);
    border-radius: 20px;
    color: var(--third-color);

    &:hover{
      border: none;
      background: var(--third-color2);
      outline: 1px solid var(--third-color);

      animation: expand 2s linear infinite;

      @keyframes expand {
        0% {outline-offset: 0px;}
        50% {outline-offset: 7px;}
        100% {outline-offset: 0px;}
      }

      
    }
  } 
}
`
