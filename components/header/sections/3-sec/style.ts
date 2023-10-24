import React from 'react'
import styled from 'styled-components'

export const ThirdSectionComp = styled.section`

.cards-content{
  display: grid;
  grid-template-columns: repeat(auto-fill,  100px );
  grid-gap: 20px;
  box-sizing: border-box;
  width: 100%;
  margin: 10px 0px;
}

.menu-header{
  display: flex;
  flex-direction: row;
  gap: 10px;

  border: 2px solid var(--third-color);
  width: min-content;
  padding: 10px 20px;
  border-radius: 100px;
  color: var(--third-color);

  p{
    color: var(--primary-color);


  }
}


`
