import React from 'react'
import styled from 'styled-components'

export const ProfDiv = styled.div`

  padding: 2%;
  width: 30%;
  border-radius: 20px;
  border: 1px solid var(--secondary-color);

  flex-direction: column;
  display: flex;
  justify-content: center; 
  align-items: center;

  .icons{
    color: var(--secondary-color);
  }
  img{
    margin: 10% 0;
    border-radius: 20px;
  }

  h2{
    margin:0;
  }

  .profileName{
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
      font-size: 10px;
    }

    .name,
    .title {
      flex: 1;
    }

  }

  button{
      
    color: black;
    padding: 1rem ;
    border: none;
    width: 100%;
    border-radius: 20px;
    background-color: var(--third-color);
    cursor: pointer;
    
  }

  span{
    margin: 10% 0;
  }
`
