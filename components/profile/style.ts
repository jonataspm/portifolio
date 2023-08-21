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



.btn{
  width: 100%;
  border-radius: 20px;
  border: none;
  padding:4%;
  background-color: var(--third-color);
  color: black;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
  b{
    margin-left: 2%;
  }
}

.icons{
  
  display: flex;
  color: var(--secondary-color);
  margin-bottom: auto;
  justify-content: space-around;

  a{
    margin: 0 10%;
  }

  a:hover{
    color: var(--third-color);
  }
}

.btnMode{
  margin: auto;
}


`
