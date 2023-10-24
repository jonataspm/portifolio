import React from 'react'
import styled from 'styled-components'
import { MenuIcons } from '../Icons/regular/menuicon'

const TitleSectionDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  border: 1px solid var(--secondary-color);
  width: min-content;
  padding: 10px 20px;
  border-radius: 100px;
  color: var(--third-color);

  p{
    color: var(--primary-color);
  }

`

interface TitleSectionrProp{
    Name:string
}


export const TitleSection = (prop:TitleSectionrProp) => {
    const Icon = MenuIcons[prop.Name];

    return(
        <TitleSectionDiv className='menu-header'>
            <Icon/>
            <p>{prop.Name}</p>
        </TitleSectionDiv>
    )
}