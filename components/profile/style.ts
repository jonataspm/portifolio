import React from 'react'
import styled from 'styled-components'

export const ProfDiv = styled.div`
display: flex;
flex-direction: column;

padding: 5%;
border: 1px solid var(--secondary-color);
border-radius: 20px;

width: 100%;
height: 85vh;

align-items: center;

.profileName{
  justify-content: space-between;
  align-items: baseline;
  display: flex;
  flex-direction: row;
  width: 100%;

  p{
    font-size: 13px;
  }
}

img{
  margin: 12% 0;
  width: 100%;

  border-radius: 10px;
  
}

span{
  margin: 12% 0;
}

button{

  width: 100%;
  border-radius: 20px;
  border: none;
  padding:4%;
  background-color: var(--third-color);
  color: black;
  cursor: pointer;
}

.icons{
  color: var(--secondary-color);
  margin-bottom: auto;
  justify-content: space-around;
}

`
